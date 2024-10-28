'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '@/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100'>
      <SliderPrimitive.Range className='absolute h-full bg-neutral-700' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='block size-5 rounded-full border-2 border-neutral-900 bg-white ring-offset-current transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
