import { FormEvent, ReactNode, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { nanoid } from "nanoid";

type GlbalProviderProps = {
  children: ReactNode;
};

export type TaskType = { title: string; id: string; updating: boolean };

function GlobalProvider({ children }: GlbalProviderProps) {
  const [undoneTasks, setUndoneTasks] = useState<TaskType[]>([]);
  const [doneTasks, setDoneTasks] = useState<TaskType[]>([]);
  const [title, setTitle] = useState<string>("");

  function addTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setUndoneTasks([...undoneTasks, { title, id: nanoid(), updating: false }]);
    setTitle("");
  }

  function deleteTask(id: string) {
    const undoneTasksList = undoneTasks.filter((task) => task.id !== id);
    const doneTasksList = doneTasks.filter((task) => task.id !== id);

    setUndoneTasks(undoneTasksList);
    setDoneTasks(doneTasksList);
  }

  function markAsDone(id: string) {
    const undoneTasksList = undoneTasks.filter((task) => task.id !== id);
    const doneTask = undoneTasks.filter((task) => task.id === id);

    setDoneTasks([...doneTasks, doneTask[0]]);
    setUndoneTasks(undoneTasksList);
  }

  function handleClickUpdate(id: string) {
    setUndoneTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, updating: !task.updating };
        }
        return task;
      });
    });
  }

  const contextValue = {
    title,
    setTitle,
    undoneTasks,
    setUndoneTasks,
    doneTasks,
    setDoneTasks,
    addTask,
    deleteTask,
    markAsDone,
    handleClickUpdate,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
