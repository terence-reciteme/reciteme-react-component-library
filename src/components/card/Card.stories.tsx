import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

export default {
    title: "Recite Me/React Component Library/Card Components",
    component: Card,
    args: {
        
    }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args} />
);

export const ImageCard = Template.bind({});
ImageCard.args = {
    image: "./images/recite_me_desktop_thumbnail.png",
    cardTitle: "Recite Me For Desktop",
    cardText: "Use the Recite Me Toolbar on your PC or Mac.",
    buttonText: "Open"
};