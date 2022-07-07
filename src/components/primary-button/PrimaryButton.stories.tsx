import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PrimaryButton from "./PrimaryButton";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

export default {
    title: "Recite Me/React Component Library/PrimaryButton",
    component: PrimaryButton,
    args: {
        
    }
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => ( 

<PrimaryButton buttonIcon={<AccessibilityNewIcon />} {...args} >
  
</PrimaryButton>
);

export const Primary_Button = Template.bind({});
Primary_Button.args = {
  type: "button",
};
