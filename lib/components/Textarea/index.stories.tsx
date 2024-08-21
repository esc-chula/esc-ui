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
    title: 'Your Message',
    placeholder: 'Insert text here',
    remarkText: 'Your message will be copied to the support team.',
  },
}

export const TextareaOnly: Story = {
  args: {
    title: 'Your Message',
    placeholder: 'Insert text here',
  },
}
