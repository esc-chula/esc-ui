import { Meta, StoryObj } from '@storybook/react'
import { ChevronsUpDown } from 'lucide-react'
import React from 'react'

import { Button } from '..'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './index'

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className='w-[350px] space-y-2'
      >
        <div className='flex items-center justify-between space-x-4 px-4'>
          <h4 className='text-sm font-semibold'>
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant='ghost' size='sm' className='w-9 p-0'>
              <ChevronsUpDown className='size-4' />
              <span className='sr-only'>Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className='rounded-md border px-4 py-3 font-mono text-sm'>
          @radix-ui/primitives
        </div>
        <CollapsibleContent className='space-y-2'>
          <div className='rounded-md border px-4 py-3 font-mono text-sm'>
            @radix-ui/colors
          </div>
          <div className='rounded-md border px-4 py-3 font-mono text-sm'>
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}
