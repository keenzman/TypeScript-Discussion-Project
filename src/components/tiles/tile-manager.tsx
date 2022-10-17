import { FunctionComponent, useContext, useEffect } from "react";
import generateMessage from "../../api";
import { ErrorLoggerContext, Message } from "../../context/logger-context";

const TileManager: FunctionComponent<{}> = () => {
  const { startMessage, addMessage, stopMessage, isRunning, clearMessage } =
    useContext(ErrorLoggerContext);

  useEffect(() => {
    const stream = generateMessage((message: Message) => {
      if (isRunning) {
        addMessage(message);
      }
    });
  }, [isRunning]);

  return <div className="container mx-auto"></div>;
};

export default TileManager;
