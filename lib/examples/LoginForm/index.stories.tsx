import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from '.'

const meta: Meta<typeof LoginForm> = {
  title: 'Examples/Login Form',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Login: Story = {}
