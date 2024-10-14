import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '@/components/Slider'

import { cn } from '@/utils'

type SliderProps = React.ComponentProps<typeof Slider>

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: ({ className, ...props }: SliderProps) => (
    <div className='flex w-[625px] items-center justify-center p-10'>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn('w-[60%]', className)}
        {...props}
      />
    </div>
  ),
}
