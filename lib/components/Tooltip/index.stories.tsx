import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '.'
import { Button } from '../Button'

// Meta configuration for the story
const meta: Meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  args: {
    content: 'Add to library',
  },
  argTypes: {
    content: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
}

// Default story for RadioGroup
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {
  render: function Render(args) {
    return (
      <TooltipProvider>
        {
          <Tooltip>
            <TooltipTrigger>
              <Button variant='outline'>Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{args.content}</p>
            </TooltipContent>
          </Tooltip>
        }
      </TooltipProvider>
    )
  },
}
