import { Dispatch, FormEvent, SetStateAction, createContext } from "react";
import { TaskType } from "./GlobalProvider";

type GlobalContextType = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  undoneTasks: TaskType[];
  setUndoneTasks: Dispatch<SetStateAction<TaskType[]>>;
  doneTasks: TaskType[];
  setDoneTasks: Dispatch<SetStateAction<TaskType[]>>;
  addTask: (e: FormEvent<HTMLFormElement>) => void;
  deleteTask: (id: string) => void;
  markAsDone: (id: string) => void;
  handleClickUpdate: (id: string) => void;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);
