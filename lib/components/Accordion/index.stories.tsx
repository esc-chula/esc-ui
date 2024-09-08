import { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '.'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
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
  render: () => (
    <AccordionTest
      items={[
        {
          title: 'Is it accessible?',
          content: 'Yes. It adheres to the WAI-ARIA design pattern.',
        },
      ]}
    />
  ),
}

export const MultipleAccordion: Story = {
  render: () => (
    <AccordionTest
      type='multiple'
      items={[
        {
          title: 'Is it accessible?',
          content: 'Yes. It adheres to the WAI-ARIA design pattern.',
        },
      ]}
    />
  ),
}
