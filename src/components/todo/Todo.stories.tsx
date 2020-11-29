import React from "react";

import { v4 as uuidv4 } from "uuid";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Todo from "./Todo";

import { fileAbsolute } from "paths.macro";

export default {
  title: "Example/Todo",
  component: Todo,
  parameters: {
    storySource: {
      componentPath:
        "/src/components/todo/Todo.tsx" ||
        "/home/ba1ry/os/styled-wind-ui/src/components/todo/Todo.tsx",
    },
  },
} as Meta;

const Template: Story<{}> = (args) => <Todo {...args} />;

export const TodoList = Template.bind({});
TodoList.args = {
  initialTasks: [
    { id: uuidv4(), task: "Task 1", done: false },
    { id: uuidv4(), task: "Task 2", done: true },
    { id: uuidv4(), task: "Task 3", done: false },
  ],
};

TodoList.parameters = {
  storySource: {
    storyPath:
      fileAbsolute ||
      "/src/components/todo/Todo.stories.tsx" ||
      "/home/ba1ry/os/styled-wind-ui/src/components/todo/Todo.stories.tsx",
  },
};
