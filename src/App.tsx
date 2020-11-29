import React from "react";

import { v4 as uuidv4 } from "uuid";

import Todo, { Task } from "./components/todo/Todo";

const App = () => {
  const initialTasks: Array<Task> = [
    { id: uuidv4(), task: "Task 1", done: false },
    { id: uuidv4(), task: "Task 2", done: true },
    { id: uuidv4(), task: "Task 3", done: false },
  ];
  return <Todo initialTasks={initialTasks} />;
};

export default App;
