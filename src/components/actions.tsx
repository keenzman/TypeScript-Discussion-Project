import { FunctionComponent, useContext } from "react";
import { ErrorLoggerContext } from "../context/logger-context";

const Actions: FunctionComponent<{}> = () => {
  const { startMessage, stopMessage, isRunning, clearMessage } =
    useContext(ErrorLoggerContext);

  return (
    <div className="container mx-auto">
      {isRunning ? (
        <button
          onClick={() => stopMessage()}
          className="bg-gray-800 rounded-md"
        >
          Stop
        </button>
      ) : (
        <button
          onClick={() => startMessage()}
          className="bg-gray-800 rounded-md"
        >
          Start
        </button>
      )}
      <button onClick={() => clearMessage()} className="bg-gray-800 rounded-md">
        Clear
      </button>
    </div>
  );
};

export default Actions;
