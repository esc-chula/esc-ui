import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { ScrollArea } from '.'

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const ExampleData = () => {
  return (
    <>
      {tags.map((tag) => (
        <React.Fragment>
          <div key={tag} className='text-sm'>
            {tag}
          </div>
          <hr className='my-2' />
        </React.Fragment>
      ))}
    </>
  )
}

export const VerticalDemo: Story = {
  args: {},
  render: (args) => (
    <ScrollArea className='h-72 w-48 rounded-md border' {...args}>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
        <ExampleData />
      </div>
    </ScrollArea>
  ),
}

export interface Artwork {
  artist: string
  art: string
}

const Works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
]

const ExampleWorks = () => {
  return (
    <>
      {Works.map((artwork) => (
        <React.Fragment>
          <figure key={artwork.artist} className='shrink-0'>
            <div className='overflow-hidden rounded-md'>
              <img
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className='aspect-[3/4] size-fit object-cover'
                width={300}
                height={400}
              />
            </div>
            <figcaption className='pt-2 text-xs text-neutral-500'>
              Photo by{' '}
              <span className='font-semibold text-foreground'>
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        </React.Fragment>
      ))}
    </>
  )
}
export const HorizontalDemo: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <ScrollArea className='w-96 whitespace-nowrap rounded-md border' {...args}>
      <div className='flex w-max space-x-4 p-4'>
        <ExampleWorks />
      </div>
    </ScrollArea>
  ),
}

export const MixedDemo: Story = {
  args: {},
  render: () => (
    <div>
      <ScrollArea
        className='h-72 w-full rounded-md border'
        orientation='vertical'
      >
        <div className='p-4'>
          <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
          <ExampleData />
        </div>
      </ScrollArea>
      <ScrollArea
        className='w-96 whitespace-nowrap rounded-md border'
        orientation='horizontal'
      >
        <div className='flex w-max space-x-4 p-4'>
          <ExampleWorks />
        </div>
      </ScrollArea>
    </div>
  ),
}
