import { useState } from "react";
import { ErrorLoggerContext } from "./context/logger-context";

function App() {
  const [count, setCount] = useState(0);

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
