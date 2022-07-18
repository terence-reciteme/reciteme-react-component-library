import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  Logo  from "./Logo";

export default {
  title: "Recite Me/React Component Library/Brand",
    component: Logo,
    args: {
        
    }
} as ComponentMeta<typeof Logo> ;

const Template:  ComponentStory<typeof Logo> = (args) => ( 
  
  <Logo {...args} />

);
export const ReciteMeLogo = Template.bind({});
  ReciteMeLogo.args = {
  width: "120px"
};