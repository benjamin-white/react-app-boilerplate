import { render, screen } from '@testing-library/react'
import Hello from '../'

describe('Hello', () => {
  it('renders a Hello component', () => {
    const name = 'Human'
    const { container } = render(<Hello name={name} />)

    expect(screen.getByText(`Hello ${name}`)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
