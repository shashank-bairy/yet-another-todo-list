import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import TextInput, { TextInputProps } from "./TextInput";

import { fileAbsolute } from "paths.macro";

export default {
  title: "Example/TextInput",
  component: TextInput,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    storySource: {
      componentPath:
        "/src/components/text-input/TextInput.tsx" ||
        "/home/ba1ry/os/styled-wind-ui/src/components/text-input/TextInput.tsx",
    },
  },
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const TextBox = Template.bind({});
TextBox.args = {
  type: "text",
};
TextBox.parameters = {
  storySource: {
    storyPath:
      fileAbsolute ||
      "/src/components/text-input/TextInput.stories.tsx" ||
      "/home/ba1ry/os/styled-wind-ui/src/components/text-input/TextInput.stories.tsx",
  },
};
