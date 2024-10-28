import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '@/components/Slider'

type SliderProps = React.ComponentProps<typeof Slider>

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { array: { type: 'number' } },
      description: 'The initial value(s) of the slider',
      defaultValue: [50], // Default to 50 for the preview
    },
    max: {
      control: 'number',
      description: 'The maximum value for the slider',
      defaultValue: 100, // Default maximum value
    },
    step: {
      control: 'number',
      description: 'The step size for the slider',
      defaultValue: 1, // Default step size
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the slider',
      defaultValue: false, // Slider enabled by default
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>
// Default Slider Story with args controls
export const Default: Story = {
  args: {
    defaultValue: [50], // Default starting value
    max: 100, // Maximum value of the slider
    step: 1, // Step size
    disabled: false, // Slider is enabled by default
  },
  render: (args: SliderProps) => (
    <div className='flex w-[625px] items-center justify-center p-10'>
      <Slider {...args} className='w-3/5' />
    </div>
  ),
}

// Custom Range Slider Story
export const CustomRange: Story = {
  args: {
    defaultValue: [30],
    max: 200,
    step: 10,
    disabled: false,
  },
  render: (args: SliderProps) => (
    <div className='flex w-[625px] items-center justify-center p-10'>
      <Slider {...args} className='w-3/5' />
    </div>
  ),
}

// Disabled Slider Story
export const Disabled: Story = {
  args: {
    defaultValue: [70],
    max: 100,
    step: 1,
    disabled: true,
  },
  render: (args: SliderProps) => (
    <div className='flex w-[625px] items-center justify-center p-10'>
      <Slider {...args} className='w-3/5' />
    </div>
  ),
}
