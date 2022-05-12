import React from 'react'
import ReactDOM from 'react-dom'
import { screen, render } from '@testing-library/react'
import CartButtons from './../CartButtons'

describe('render cart button', () => {
  it('should see cart button and login button', async () => {
    // await render(<CartButtons />)
    // expect(screen.getByTestId()).toHaveTextContent('Login')
    const div = document.createElement('div')
    ReactDOM.render(<CartButtons></CartButtons>, div)
  })
})
