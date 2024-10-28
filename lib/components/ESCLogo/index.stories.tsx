import { Meta, StoryObj } from '@storybook/react';
import { ESCLogo } from '.';

const meta: Meta<typeof ESCLogo> = {
  title: 'Components/ESCLogo',
  component: ESCLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'white', 'black'],
      description: 'The color variant',
    },
    language: {
      control: 'radio',
      options: ['en', 'th'],
      description: 'The language variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'The size of the logo',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ESCLogo>;

export const Default: Story = {
  args: {
    color: 'default',
    language: 'th',
    size: 'md',
  },
};

export const White: Story = {
  args: {
    color: 'white',
    language: 'th',
    size: 'md',
  },
};

export const Black: Story = {
  args: {
    color: 'black',
    language: 'th',
    size: 'md',
  },
};

export const EnglishVersion: Story = {
  args: {
    color: 'default',
    language: 'en',
    size: 'md',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <ESCLogo />
      <ESCLogo color="white" />
      <ESCLogo color="black" />
      <ESCLogo color="default" language="en" />
      <ESCLogo color="white" language="en" />
      <ESCLogo color="black" language="en" />
    </div>
  ),
};

export const DarkBackground: Story = {
  render: () => (
    <div className="bg-gray-800 p-4">
      <ESCLogo color="white" language="en" />
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div className="flex flex-row items-center space-x-4">
        <ESCLogo size="sm" />
        <ESCLogo size="md" />
        <ESCLogo size="lg" />
        <ESCLogo size="xl" />
        <ESCLogo size="full" />
    </div>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div className="flex flex-row items-center space-x-4">
      <ESCLogo className="h-24" />
      <ESCLogo size="full" />
      <ESCLogo className="h-72" />
    </div>
  ),
};