import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from '.'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Your Message',
    htmlFor: 'message',
    placeholder: 'Insert text here',
    remarkText: 'Your message will be copied to the support team.',
  },
}

export const LabelOnly: Story = {
  args: {
    label: 'Your Message',
    htmlFor: 'message',
  },
}

export const TextareaOnly: Story = {
  args: {
    htmlFor: 'message',
    placeholder: 'Insert text here',
  },
}

export const RemarkTextOnly: Story = {
  args: {
    remarkText: 'Your message will be copied to the support team.',
  },
}
