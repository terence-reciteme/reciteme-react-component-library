import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectInput from "./Select";

export default { 
  title: "Recite Me/React Component Library/Form Components",
  component: SelectInput,
  args: {
      
    }
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => ( 

<SelectInput {...args} />
);

export const select = Template.bind({});
select.args = {
  label: "Age",
  id: "selectAge",
  labelId: "",
  options: [{label: "10", id: "1"},{label: "20", id: "2"},{label: "30", id: "3"}]
};