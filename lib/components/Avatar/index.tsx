import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

import { cn } from '@/utils'

export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  src?: string
  alt?: string
  fallback?: string
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ src, alt, fallback, className }, ref) => (
    <AvatarPrimitive.Root
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
    >
      <AvatarPrimitive.Image
        ref={ref}
        className={cn('aspect-square h-full w-full')}
        src={src}
        alt={alt}
      />
      <AvatarPrimitive.Fallback
        className={cn(
          'flex h-full w-full items-center justify-center rounded-full bg-muted text-carmine-500'
        )}
      >
        {fallback?.split(' ').map((word) => word[0])}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
)
Avatar.displayName = 'Avatar'

export { Avatar }
