import { cn } from '@/utils'
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/utils/types'
import { VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'

const typographyVariants = cva('w-full', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7',
      blockquote: 'border-l-2 pl-6 italic',
      'inline-code':
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})

type TypographyProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, VariantProps<typeof typographyVariants>>

type TypographyComponent = <C extends React.ElementType = 'span'>(
  props: TypographyProps<C>
) => React.ReactElement | null

// @ts-expect-error - unexpected typing errors
export const Typography: TypographyComponent = forwardRef(
  <C extends React.ElementType = 'span'>(
    { as, variant, className, ...props }: TypographyProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span'

    return (
      <Component
        ref={ref}
        className={cn(
          typographyVariants({
            variant,
            className,
          })
        )}
        {...props}
      />
    )
  }
)
