import React, { useState, ChangeEvent, MouseEvent } from "react";

import styled from "styled-wind";

import TextInput from "../text-input/TextInput";
import Button from "../button/Button";

export interface TaskFormProps {
  addTask: (task: string) => void;
}

const StyledTaskForm = styled.form`
  .flex;
  .justify-between;
  .mt-5;
`;

const TaskForm = ({ addTask }: TaskFormProps) => {
  const [task, setTask] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <StyledTaskForm>
      <TextInput
        type="text"
        text={task}
        style={{
          flex: 1,
          border: 0,
          outline: "none",
          padding: "1.25rem",
          "box-shadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px",
        }}
        onChange={handleChange}
      ></TextInput>
      <Button
        type="submit"
        label="Add Task"
        style={{ backgroundColor: "#1ea7fd", color: "white" }}
        onClick={handleClick}
      ></Button>
    </StyledTaskForm>
  );
};

export default TaskForm;
