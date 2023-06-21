import { Edit, Trash2 } from "lucide-react";
import useGlobalContext from "../hooks/useGlobalContext";
import EditForm from "./EditForm";

type TaskProps = {
  text: string;
  id: string;
  updating?: boolean;
};

function UndoneTask({ text, id, updating }: TaskProps) {
  const { deleteTask, markAsDone, handleClickUpdate } = useGlobalContext();

  return (
    <>
      {updating ? (
        <EditForm id={id} />
      ) : (
        <div className="relative flex min-w-full justify-end gap-4 bg-violet-500 p-4 text-lg font-normal">
          <div
            className="absolute inset-0 flex h-full w-full cursor-pointer items-center p-4"
            onClick={() => markAsDone(id)}
          >
            <p className="w-4/5 break-all">{text}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Edit
              size={32}
              className="z-50 cursor-pointer transition-transform hover:scale-110"
              onClick={() => handleClickUpdate(id)}
            />
            <Trash2
              size={32}
              className="z-50 cursor-pointer transition-transform hover:scale-110"
              onClick={() => deleteTask(id)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default UndoneTask;
