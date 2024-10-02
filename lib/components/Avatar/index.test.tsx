import { render } from '@testing-library/react'

import { Avatar } from '.'

describe(`Component: ${Avatar.name}`, () => {
  it('should render', () => {
    const { container } = render(<Avatar fallback='John Doe' />)

    expect(container).toBeInTheDocument()
  })
})
