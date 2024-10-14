import type { Meta, StoryObj } from '@storybook/react'
import { CalendarDays } from 'lucide-react'

import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '.'

// Meta configuration for the story
const meta: Meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

// Default story for RadioGroup
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {
  render: function Render() {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant='link'>@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className='w-80'>
          <div className='flex justify-between space-x-4'>
            <Avatar src='https://github.com/vercel.png' fallback='VC' />
            <div className='space-y-1'>
              <h4 className='text-sm font-semibold'>@nextjs</h4>
              <p className='text-sm'>
                The React Framework – created and maintained by @vercel.
              </p>
              <div className='flex items-center pt-2'>
                <CalendarDays className='mr-2 size-4 opacity-70' />{' '}
                <span className='text-xs text-neutral-500'>
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  },
}
