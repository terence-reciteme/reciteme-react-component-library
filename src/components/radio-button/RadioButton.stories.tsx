import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  RadioButton  from "./RadioButton";

export default {
    title: "Recite Me/React Component Library/Form Components",
    component: RadioButton,
    args: {
        
    }
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
    <RadioButton {...args} />
)

export const radioButton = Template.bind({});
radioButton.args = {
    label: "Radio"
}