import { useState } from "react";
import { ErrorLoggerContext, Message } from "./context/logger-context";
import LandingPage from "./components/landing-page";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const addMessage = (message: Message) => {
    setMessages((oldMessages: Message[]) => {
      const copy = [...oldMessages];
      copy.unshift(message);
      return copy;
    });
  };

  const removeMessage = (msg: Message) => {
    setMessages((oldMessages: Message[]) => {
      const currentCopy = [...oldMessages];
      const finalMessages = currentCopy.filter((item: Message) => {
        return !(
          item.priority === msg.priority && item.message === msg.message
        );
      });
      return finalMessages;
    });
  };

  const clearMessage = () => {
    setMessages([]);
  };

  const startMessage = () => {
    setIsRunning(true);
  };

  const stopMessage = () => {
    setIsRunning(false);
  };

  return (
    <ErrorLoggerContext.Provider
      value={{
        messages,
        isRunning,
        addMessage,
        removeMessage,
        clearMessage,
        stopMessage,
        startMessage,
      }}
    >
      <LandingPage />
    </ErrorLoggerContext.Provider>
  );
}

export default App;
