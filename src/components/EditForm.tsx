import useGlobalContext from "../hooks/useGlobalContext";
import { useState } from "react";

type EditFormType = {
  id: string;
};

function EditForm({ id }: EditFormType) {
  const { setUndoneTasks } = useGlobalContext();

  const [updatedTitle, setUpdatedTitle] = useState<string>("");

  function UpdateTask(e: React.FormEvent<HTMLFormElement>, id: string) {
    e.preventDefault();
    setUndoneTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { title: updatedTitle, id, updating: !task.updating };
        }
        return task;
      });
    });
  }

  return (
    <form onSubmit={(e) => UpdateTask(e, id)} className="flex min-w-full">
      <input
        type="text"
        placeholder="Edite a tarefa"
        className="h-12 flex-1 border border-violet-500 bg-violet-950 p-2 outline-none"
        value={updatedTitle}
        maxLength={80}
        required
        pattern="^.{1,80}$"
        onChange={(e) => setUpdatedTitle(e.target.value)}
        onInvalid={(e) =>
          (e.target as HTMLInputElement).setCustomValidity(
            "Este campo não pode ficar vazio"
          )
        }
      />
      <button
        type="submit"
        className="w-28 bg-violet-500 transition-colors hover:bg-violet-600 focus:bg-violet-600"
      >
        Salvar
      </button>
    </form>
  );
}

export default EditForm;
