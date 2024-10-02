import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioGroupItem } from '.'
import { Label } from '../Label'

// Meta configuration for the story
const meta: Meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  args: {
    defaultValue: 'Option 1',
    id: 'Option 1',
    value: 'Option 1',
    disabled: false,
  },
  argTypes: {
    defaultValue: {
      control: 'text',
    },
    id: {
      control: 'text',
    },
    value: { control: 'text' },
    disabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

// Default story for RadioGroup
type Story = StoryObj<typeof meta>

export default meta

export const Example: Story = {
  args: {
    disabled: true,
  },
  render: function Render(args) {
    return (
      <RadioGroup defaultValue={args.defaultValue}>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='Option 1' id='r1' />
          <Label htmlFor='r1'>Option 1</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='Option 2' id='r2' />
          <Label htmlFor='r2'>Option 2</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem disabled={args.disabled} value='disabled' id='r3' />
          <Label htmlFor='r3'>disabled</Label>
        </div>
      </RadioGroup>
    )
  },
}

export const Default: Story = {
  render: function Render() {
    return (
      <RadioGroup>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='Option 1' id='r1' />
          <Label htmlFor='r1'>Option 1</Label>
        </div>
      </RadioGroup>
    )
  },
}
export const Selected: Story = {
  render: function Render(args) {
    return (
      <RadioGroup defaultValue={args.defaultValue}>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='Option 1' id='r1' />
          <Label htmlFor='r1'>Option 1</Label>
        </div>
      </RadioGroup>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: function Render(args) {
    return (
      <RadioGroup>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem disabled={args.disabled} value='Option 1' id='r1' />
          <Label htmlFor='r1'>Option 1</Label>
        </div>
      </RadioGroup>
    )
  },
}
