import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarFallback, AvatarImage } from '.'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>Shadcn</AvatarFallback>
    </Avatar>
  ),

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}
export const Fallback: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <Avatar>
      <AvatarImage src='' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}
