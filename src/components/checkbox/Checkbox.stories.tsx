import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Recite Me/React Component Library/Form Components",
    component: Checkbox,
    args: {
        
    }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => ( 

<Checkbox {...args} />
);

export const checkbox = Template.bind({});
checkbox.args = {
  label: "Checkbox"
};