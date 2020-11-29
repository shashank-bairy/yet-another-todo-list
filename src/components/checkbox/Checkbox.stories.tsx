import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Checkbox, { CheckboxProps } from "./Checkbox";

import { fileAbsolute } from "paths.macro";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    storySource: {
      componentPath:
        "/src/components/checkbox/Checkbox.tsx" ||
        "/home/ba1ry/os/styled-wind-ui/src/components/checkbox/Checkbox.tsx",
    },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  label: "Checkbox",
};
Medium.parameters = {
  storySource: {
    storyPath:
      fileAbsolute ||
      "/src/components/checkbox/Checkbox.stories.tsx" ||
      "/home/ba1ry/os/styled-wind-ui/src/components/checkbox/Checkbox.stories.tsx",
  },
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Checkbox",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Checkbox",
};
