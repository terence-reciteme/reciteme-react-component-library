import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PrimaryButton from "./PrimaryButton";

export default {
    title: "Recite Me/React Component Library/PrimaryButton",
    component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />;

export const newPrimaryButton = Template.bind({});
newPrimaryButton.args = {
  type: "button"
};
