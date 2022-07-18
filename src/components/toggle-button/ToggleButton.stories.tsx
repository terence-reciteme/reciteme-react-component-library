import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToggleButton from "./ToggleButton";
import { ToggleButtonGroup } from "@mui/material";

export default {
    title: "Recite Me/React Component Library/Form Components",
    component: ToggleButton,
    args: {
        
    }
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => ( 
    <ToggleButtonGroup>
        <ToggleButton id="week" ariaLabel="week" value="week"  {...args} >week</ToggleButton>
        <ToggleButton id="month" ariaLabel="month" value="month"  {...args} >month</ToggleButton>
        <ToggleButton id="year" ariaLabel="year" value="year"  {...args} >year</ToggleButton>
    </ToggleButtonGroup>

);

export const Toggle_Button = Template.bind({});
Toggle_Button.args = {
  
};