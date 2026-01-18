import { FiTrash2 } from "react-icons/fi";
import useTodoStore from "./store/useTodoStore";

export const TodoItem = ({ task }) => {
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const removeTask = useTodoStore((state) => state.removeTask);

  return (
    <li className="flex items-center gap-3 p-4 bg-white rounded-lg group border border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="w-4 h-4 accent-primary"
      />
      <span className={`flex-1 ${task.completed ? "line-through text-text-muted" : "text-text"}`}>
        {task.text}
      </span>
      <button
        onClick={() => removeTask(task.id)}
        aria-label="Delete task"
        className="text-text-muted hover:text-red-500 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
      >
        <FiTrash2 size={18} />
      </button>
    </li>
  );
};
