import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '.'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {
  args: {
    src: 'https://www.boomchanotai.com/boom.png',
    alt: 'Boom Chanotai',
    fallback: 'BC',
  },
}
export const Fallback: Story = {
  args: {
    fallback: 'BC',
  },
}
