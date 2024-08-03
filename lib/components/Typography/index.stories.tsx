import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from ".";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestiae quis, aperiam soluta id aspernatur ea illum necessitatibus dolore recusandae omnis voluptate iure earum quod! Unde at explicabo quod suscipit!",
  },
};
