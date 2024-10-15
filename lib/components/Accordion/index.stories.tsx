import { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '.'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
    },
    items: {
      control: 'object',
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

const AccordionTest = ({
  items,
  type = 'single',
}: {
  items: { title: string; content: string }[]
  type?: 'single' | 'multiple'
}) => (
  <Accordion type={type} className='w-full'>
    {items.map((item, index) => (
      <AccordionItem key={index} value={`item-${index + 1}`}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
)

export const SingleAccordion: Story = {
  args: {
    type: 'single',
    items: [
      {
        title: 'Is it accessible?',
        content: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        title: 'Is it styled?',
        content:
          "Yes. It comes with default styles that matches the other components' aesthetic.",
      },
      {
        title: 'Is it animated?',
        content:
          "Yes. It's animated by default, but you can disable it if you prefer.",
      },
    ],
  },
  render: (args) => <AccordionTest type={args.type} items={args.items} />,
}

export const MultipleAccordion: Story = {
  args: {
    type: 'multiple',
    items: [
      {
        title: 'Is it accessible?',
        content: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        title: 'Is it styled?',
        content:
          "Yes. It comes with default styles that matches the other components' aesthetic.",
      },
      {
        title: 'Is it animated?',
        content:
          "Yes. It's animated by default, but you can disable it if you prefer.",
      },
    ],
  },
  render: (args) => <AccordionTest {...args} />,
}
