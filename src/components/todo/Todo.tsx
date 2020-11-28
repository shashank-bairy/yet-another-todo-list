import React, { useState } from "react";

import styled from "styled-wind";

import { v4 as uuidv4 } from "uuid";

import TaskForm from "../task-form/TaskForm";
import List from "../list/List";
import ListItem from "../list-item/ListItem";
import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";

export interface Task {
  id: string;
  task: string;
  done: boolean;
}

const StyledTodo = styled.div`
  .mt-20;  
  .flex;
  .justify-center;
  .items-center;
  
`;

const StyledTodoContainer = styled.div`
  .container;
  .font-sans;  
  .w-1/2;
  .flex;
  .flex-col;
`;

const StyledHeading = styled.h1`
  .text-center;
  .font-sans;
  .text-2xl;
`;

const StyledListItemContainer = styled.div`
  .flex;
  .justify-between;
  .items-center;
  .py-3;
  .px-3;
  .bg-gray-50;
  .shadow-lg;
`;

const Todo = () => {
  const [tasks, setTasks] = useState<Array<Task>>([
    { id: uuidv4(), task: "Task 1", done: false },
    { id: uuidv4(), task: "Task 2", done: false },
    { id: uuidv4(), task: "Task 3", done: false },
  ]);

  const addTask = (task: string) => {
    if (task === "") return;
    const newTask = { id: uuidv4(), task: task, done: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      else
        return {
          ...task,
          done: !task.done,
        };
    });
    setTasks(newTasks);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const listItems = tasks.map((task) => (
    <ListItem key={task.id}>
      <StyledListItemContainer>
        <label
          style={{ textDecoration: task.done ? "line-through" : undefined }}
        >
          <Checkbox
            id={task.id}
            label={task.task}
            checked={task.done}
            onClick={() => toggleTask(task.id)}
          />
        </label>
        <Button
          label="🗑️"
          size="small"
          style={{ backgroundColor: "#e30000", color: "white" }}
          onClick={() => removeTask(task.id)}
        />
      </StyledListItemContainer>
    </ListItem>
  ));

  return (
    <StyledTodo>
      <StyledTodoContainer>
        <StyledHeading>Yet Another Todo List</StyledHeading>
        <TaskForm addTask={addTask} />
        <List type="unordered" listStyleNone={true}>
          {listItems}
        </List>
      </StyledTodoContainer>
    </StyledTodo>
  );
};

export default Todo;
