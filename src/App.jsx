import { AddTodo } from "./components/AddTodo";
import { TaskCounter } from "./components/TaskCounter";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <div className="min-h-screen bg-bg p-6 sm:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text mb-1">
          Goyo Tasks <span className="text-text-muted ml-1 inline-block translate-y-[2px]">고요</span>
        </h1>
        <TaskCounter />
      </header>
      <div className="max-w-lg mx-auto">
        <div className="space-y-4">
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </div>
  );
};
