import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  TypographyText from "./Typography";

export default {
    title: "Recite Me/React Component Library/Typography Components",
    component: TypographyText,
    args: {
        
    }
} as ComponentMeta<typeof TypographyText>

const Template: ComponentStory<typeof TypographyText> = (args) => (
    <TypographyText {...args}  />
);

export const Typography = Template.bind({});
Typography.args = {
    h1: "Heading 1",
    h2: "Heading 2",
    h3: "Heading 3",
    h4: "Heading 4",
    h5: "Heading 5",
    h6: "Heading 6",
    paragraph: "This is a small demo paragraph."
};