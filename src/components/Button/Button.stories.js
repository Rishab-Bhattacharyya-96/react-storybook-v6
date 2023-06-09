import React from "react";
import Button from "./Button";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "form/Button",
  component: Button,
  args: {
    children: "Button",
    disabled: true,
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "Primary Args",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "Secondary Args",
};

export const Success = Template.bind({});

Success.args = {
  variant: "success",
  children: "Success Args",
};

export const Danger = Template.bind({});

Danger.args = {
  variant: "danger",
  children: "Danger Args",
  onClick: () => {
    console.log("Button Clicked");
  },
};

export const Knobs = () => Template.bind({});

Knobs.args = {
  variant: "danger",
  //   children: text("Label", "Button Label"),
  disabled: boolean("Disabled", false),
};
