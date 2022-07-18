import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  SwitchButton from "./Switch";

export default {
    title: "Recite Me/React Component Library/Form Components",
    component: SwitchButton,
    args: {

    }
} as ComponentMeta<typeof SwitchButton>

const Template: ComponentStory<typeof SwitchButton> = (args) => (
    <SwitchButton {...args} />
)

export const Switch = Template.bind({});
Switch.args={
    labelLeft: "off",
    labelRight: "on",
    legend: ""
}