import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '.'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const P: Story = {
  args: {
    as: 'p',
    variant: 'p',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestiae quis, aperiam soluta id aspernatur ea illum necessitatibus dolore recusandae omnis voluptate iure earum quod! Unde at explicabo quod suscipit!',
  },
}

export const Heading1: Story = {
  args: {
    as: 'h1',
    variant: 'h1',
    children: 'Lorem ipsum dolor sit amet',
  },
}

export const Heading2: Story = {
  args: {
    as: 'h2',
    variant: 'h2',
    children: 'Consectetur adipisicing elit',
  },
}

export const Heading3: Story = {
  args: {
    as: 'h3',
    variant: 'h3',
    children: 'Temporibus molestiae quis',
  },
}

export const Heading4: Story = {
  args: {
    as: 'h4',
    variant: 'h4',
    children: 'Aperiam soluta id aspernatur',
  },
}

export const Blockquote: Story = {
  args: {
    as: 'blockquote',
    variant: 'blockquote',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sunt, sit, aut ducimus illum possimus doloribus quasi necessitatibus et harum saepe quo ipsum voluptatibus veritatis ad natus sed! Praesentium, fuga.',
  },
}

export const InlineCode: Story = {
  args: {
    as: 'code',
    variant: 'inline-code',
    children: "console.log('Lorem ipsum dolor sit amet')",
  },
}

export const Lead: Story = {
  args: {
    as: 'p',
    variant: 'lead',
    children: 'Follow me, I\'m the "Lead"er. I know the way!',
  },
}

export const Large: Story = {
  args: {
    as: 'p',
    variant: 'large',
    children: 'Please confirm your action',
  },
}

export const Small: Story = {
  args: {
    as: 'p',
    variant: 'small',
    children: 'Delete account',
  },
}

export const Subtle: Story = {
  args: {
    as: 'p',
    variant: 'subtle',
    children: 'Do anyone hear me?',
  },
}
