import DoneTask from "./components/DoneTask";
import Form from "./components/Form";
import UndoneTask from "./components/UndoneTask";
import useGlobalContext from "./hooks/useGlobalContext";

function App() {
  const { undoneTasks, doneTasks } = useGlobalContext();

  return (
    <main className="flex h-screen items-center justify-center bg-violet-500 p-16 text-white">
      <div className="flex max-h-full w-[600px] flex-col items-center justify-center rounded-lg bg-violet-950 p-8">
        <h1 className="mb-12 text-3xl font-bold">Lista de tarefas</h1>

        <Form />

        {undoneTasks.length > 0 || doneTasks.length > 0 ? (
          <>
            <p className="mb-8 ml-4 self-start text-xl">
              Tarefas pendentes: {undoneTasks.length}
            </p>
            <div className="flex w-full flex-col gap-4 overflow-y-auto scroll-smooth px-4 scrollbar-thin scrollbar-track-violet-700 scrollbar-thumb-violet-500 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">
              {undoneTasks.map((task) => (
                <UndoneTask text={task.title} id={task.id} key={task.id} />
              ))}
              {doneTasks.map((task) => (
                <DoneTask text={task.title} id={task.id} key={task.id} />
              ))}
            </div>
          </>
        ) : (
          <div>
            <p className="my-4 text-xl">Nenhuma tarefa no momento!</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
