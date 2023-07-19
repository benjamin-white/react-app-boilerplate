import type { Meta } from '@storybook/react'
import Hello from '../'

const meta: Meta<typeof Hello> = {
  component: Hello,
  title: 'Components/Hello',
  args: {
    name: 'human',
  },
}

export default meta
export const Default = {}
