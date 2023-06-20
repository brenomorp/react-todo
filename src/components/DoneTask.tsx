import { Trash2 } from "lucide-react";
import useGlobalContext from "../hooks/useGlobalContext";

type TaskProps = {
  text: string;
  id: string;
};

function DoneTask({ text, id }: TaskProps) {
  const { deleteTask } = useGlobalContext();

  return (
    <div className="flex min-w-full gap-4 bg-gray-200/20 p-4 text-lg font-normal text-white/50">
      <p className="flex-1 break-all line-through">{text}</p>
      <div className="flex items-center justify-center gap-4">
        <Trash2
          size={32}
          color="white"
          className="cursor-pointer transition-transform hover:scale-110"
          onClick={() => deleteTask(id)}
        />
      </div>
    </div>
  );
}

export default DoneTask;
