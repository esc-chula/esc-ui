import type { Meta, StoryObj } from '@storybook/react'

import { Separator } from '.'

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: (args) => (
    <div>
      <div className='space-y-1'>
        <h4 className='text-sm font-medium leading-none'>Radix Primitives</h4>
        <p className='text-sm text-muted-foreground'>
          An open-source UI component library.
        </p>
      </div>
      <Separator className='my-4' {...args} />
      <div className='flex h-5 items-center space-x-4 text-sm'>
        <div>Blog</div>
        <Separator orientation='vertical' />
        <div>Docs</div>
        <Separator orientation='vertical' />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div>
      <div className='flex h-5 items-center space-x-4 text-sm'>
        <div>Blog</div>
        <Separator {...args} />
        <div>Docs</div>
        <Separator {...args} />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className='space-y-4 text-center'>
      <div>
        <p>First Element</p>
      </div>
      <Separator {...args} />
      <div>
        <p>Second Element</p>
      </div>
    </div>
  ),
}
