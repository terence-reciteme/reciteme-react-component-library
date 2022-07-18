import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "./TextField";

export default {
    title: "Recite Me/React Component Library/Form Components",
    component: TextInput,
    args:{

    }
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
    
    <TextInput {...args} />
);

export const Text = Template.bind({})
Text.args = {
   label: "Label",
   fieldInline: false,
   type: "text"
};