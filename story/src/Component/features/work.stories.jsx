import React from "react";
import Features from "./stroy";

export default {
  title: "Component/Features",
  component: Features,
  argTypes: {
    features: { control: "array" },
    showAll: { control: "boolean" },
  },
};

const Template = (args) => <Features {...args} />;

export const Default = Template.bind({});
Default.args = {
  features: [
    "Keyless ",
    "Central Locking",
    "Air Conditioner",
    "Bluetooth Connectivity",
    "Touchscreen",
    "Steering Mounted Controls",
    "WIFI ",
    "STREAM",
    "WORKDAY"
  ],
  showAll: false,
};

export const ShowAll = Template.bind({});
ShowAll.args = {
  features: [
    "Keyless ",
    "Central Locking",
    "Air Conditioner",
    "Bluetooth Connectivity",
    "Touchscreen",
    "Steering Mounted Controls",
    "Sunroof",
    "Rear Camera",
    "Leather Seats",
    "Automatic Headlights",
    "WIFI",
    "STREAM",
    "WORK DAY"
  ],
  showAll: true,
};
