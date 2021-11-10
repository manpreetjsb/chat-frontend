import React from 'react'
import { render } from '@testing-library/react'

import ChatMessages from './ChatMessage'

const messages = [
  {
    _id: '618bb70c48c220001b5f6bb5',
    message: 'This is a first Message.',
    author: 'test',
    timestamp: 1636546316665,
    token: 'HBAwxg0XMMM0',
  },
]
const setup = () => {
  const utils = render(<ChatMessages messages={messages} />)

  return {
    ...utils,
  }
}

describe('ChatMessages', () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn()
  it('Should have first Message', () => {
    const { getByText } = setup()
    expect(getByText('This is a first Message.')).toBeInTheDocument()
    expect(getByText('10 Nov 2021, 12:11')).toBeInTheDocument()
    expect(getByText('user : test')).toBeInTheDocument()
  })
})
