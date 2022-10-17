import { createContext } from "react";

export interface Message {
  message: string;
  priority: Priority;
}

export enum Priority {
  Error,
  Warn,
  Info,
}

export type ErrorLoggerContextState = {
  messages: Message[];
  isRunning: boolean;
  addMessage: (message: Message) => void;
  removeMessage: (message: Message) => void;
  clearMessage: () => void;
  stopMessage: () => void;
  startMessage: () => void;
};

// default values for context
const contextDefaultValues: ErrorLoggerContextState = {
  messages: [],
  isRunning: false,
  addMessage: () => {},
  removeMessage: () => {},
  clearMessage: () => {},
  stopMessage: () => {},
  startMessage: () => {},
};

// Creating Context of type <> with initial default values
export const ErrorLoggerContext =
  createContext<ErrorLoggerContextState>(contextDefaultValues);
