/** @type {import('tailwindcss').Config} */
export default {
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        carmine: {
          50: 'hsl(var(--esc-carmine-50))',
          100: 'hsl(var(--esc-carmine-100))',
          200: 'hsl(var(--esc-carmine-200))',
          300: 'hsl(var(--esc-carmine-300))',
          400: 'hsl(var(--esc-carmine-400))',
          500: 'hsl(var(--esc-carmine-500))',
          600: 'hsl(var(--esc-carmine-600))',
          700: 'hsl(var(--esc-carmine-700))',
          800: 'hsl(var(--esc-carmine-800))',
          900: 'hsl(var(--esc-carmine-900))',
        },
        neutral: {
          50: 'hsl(var(--esc-neutral-50))',
          100: 'hsl(var(--esc-neutral-100))',
          200: 'hsl(var(--esc-neutral-200))',
          300: 'hsl(var(--esc-neutral-300))',
          400: 'hsl(var(--esc-neutral-400))',
          500: 'hsl(var(--esc-neutral-500))',
          600: 'hsl(var(--esc-neutral-600))',
          700: 'hsl(var(--esc-neutral-700))',
          800: 'hsl(var(--esc-neutral-800))',
          900: 'hsl(var(--esc-neutral-900))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        md: 'var(--shadow-md)',
      },
    },
  },
  plugins: [],
}
