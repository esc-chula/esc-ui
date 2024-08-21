import * as React from 'react'

import { cn } from '@/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string
  remarkText?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, title, remarkText, ...props }, ref) => {
    return (
      <div className='grid w-full gap-1.5'>
        <label htmlFor={title}>{title}</label>
        <textarea
          className={cn(
            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <p className='text-sm text-muted-foreground'>{remarkText}</p>
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
