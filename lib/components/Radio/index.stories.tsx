import { Meta, Story } from '@storybook/react'

import { RadioGroup, RadioGroupItem } from '.'
import { Label } from '../Label'

// Meta configuration for the story
export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

// Default story for RadioGroup
const Template: Story = () => (
  <RadioGroup defaultValue='default'>
    <div className='flex items-center space-x-2'>
      <RadioGroupItem value='default' id='r1' />
      <Label htmlFor='r1'>Default</Label>
    </div>
    <div className='flex items-center space-x-2'>
      <RadioGroupItem value='Option 1' id='r2' />
      <Label htmlFor='r2'>Option 1</Label>
    </div>
    <div className='flex items-center space-x-2'>
      <RadioGroupItem disabled value='disabled' id='r3' />
      <Label htmlFor='r3'>disabled</Label>
    </div>
  </RadioGroup>
)

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'insert-RadioGropItem-id',
  value: 'insert-value-here',
  id: 'insert-id-option-here',
}
