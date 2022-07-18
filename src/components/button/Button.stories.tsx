import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

export default {
    title: "Recite Me/React Component Library/Form Components",
    component: Button,
    args: {
        
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => ( 

<Button buttonIcon={<AccessibilityNewIcon />} {...args} >
  Open
  </Button>
);

export const button = Template.bind({});
button.args = {
  type: "button",
  buttonVariant: "red",
  width: "120px"
};
