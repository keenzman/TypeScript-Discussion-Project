import { FunctionComponent, useContext, useEffect } from "react";
import generateMessage, { Priority } from "../../api";
import { ErrorLoggerContext, Message } from "../../context/logger-context";

type TileListProps = {
  messages: Message[];
  type: number;
  removeMessage: (message: Message) => void;
};

const TileList: FunctionComponent<TileListProps> = ({
  messages,
  removeMessage,
  type,
}: TileListProps) => {
  const getTileColor = (index: number) => {
    if (Priority.Error === index) {
      return "#F56236";
    } else if (Priority.Warn === index) {
      return "#FCE788";
    } else if (Priority.Info === index) {
      return "#88FCA3";
    }
  };

  const getTileLabel = (index: number) => {
    if (Priority.Error === index) {
      return "Error";
    } else if (Priority.Warn === index) {
      return "Warning";
    } else if (Priority.Info === index) {
      return "Info";
    }
  };

  const style = {
    backgroundColour: getTileColor(type),
  };

  return (
    <div className="p-2 mx-2">
      <h2>
        {getTileLabel(type)} {type}
      </h2>
      <h3>Messages {messages.length}</h3>
      {messages.map((i: Message, index: number) => {
        return (
          <div className={getClassType(type)} key={index}>
            <Tile message={i} removeMessage={removeMessage} />
          </div>
        );
      })}
    </div>
  );
};

export default TileList;
