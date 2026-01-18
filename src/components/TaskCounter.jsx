import useTodoStore from "./store/useTodoStore";

export const TaskCounter = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  return (
    <p className="text-sm text-text-muted">
      {completedCount} of {totalCount} tasks completed
    </p>
  );
};
