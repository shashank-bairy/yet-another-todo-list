import React from "react";

import { v4 as uuidv4 } from "uuid";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import List, { ListProps } from "./List";

import ListItem from "../list-item/ListItem";

import { fileAbsolute } from "paths.macro";

export default {
  title: "Example/List",
  component: List,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    storySource: {
      componentPath:
        "/src/components/list/List.tsx" ||
        "/home/ba1ry/os/styled-wind-ui/src/components/list/List.tsx",
    },
  },
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

const listItems = [
  { id: uuidv4(), task: "Task 1", done: false },
  { id: uuidv4(), task: "Task 2", done: false },
  { id: uuidv4(), task: "Task 3", done: false },
];

export const UnorderedList = Template.bind({});
UnorderedList.args = {
  type: "unordered",
  listStyleNone: false,
  children: listItems.map((item) => (
    <ListItem key={item.id}>{item.task}</ListItem>
  )),
};

UnorderedList.parameters = {
  storySource: {
    storyPath:
      fileAbsolute ||
      "/src/components/list/List.stories.tsx" ||
      "/home/ba1ry/os/styled-wind-ui/src/components/list/List.stories.tsx",
  },
};

export const OrderedList = Template.bind({});
OrderedList.args = {
  type: "ordered",
  listStyleNone: false,
  children: listItems.map((item) => (
    <ListItem key={item.id}>{item.task}</ListItem>
  )),
};
