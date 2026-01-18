import useTodoStore from "./store/useTodoStore";
import { TodoItem } from "./TodoItem";
import { EmptyState } from "./EmptyState";

export const TodoList = () => {
  const tasks = useTodoStore((state) => state.tasks);

  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
