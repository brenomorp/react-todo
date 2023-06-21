import useGlobalContext from "../hooks/useGlobalContext";

function Form() {
  const { title, setTitle, addTask } = useGlobalContext();

  return (
    <form onSubmit={addTask} className="mb-12 flex min-w-full">
      <input
        type="text"
        placeholder="Qual a tarefa do dia?"
        className="h-12 flex-1 border border-violet-500 bg-violet-950 p-2 outline-none"
        maxLength={80}
        value={title}
        required
        pattern="^.{1,80}$"
        onChange={(e) => setTitle(e.target.value)}
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
        Adicionar
      </button>
    </form>
  );
}

export default Form;
