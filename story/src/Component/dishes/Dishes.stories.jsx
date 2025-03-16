import React from "react";
import TodayDishes from "./Dishes";

export default {
  title: "Components/TodayDishes",
  component: TodayDishes
};

const Template = (args) => <TodayDishes {...args} />;

export const Default = Template.bind({});
Default.args = {};
