import { render } from '@testing-library/react'

import { Button } from '.'

describe(`Component: ${Button.name}`, () => {
  it('should render', () => {
    const { container } = render(<Button>My button</Button>)

    expect(container).toBeInTheDocument()
  })
})
