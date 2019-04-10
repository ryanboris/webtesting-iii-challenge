import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import Display from './Display'

afterEach(cleanup)

describe('<Display/>', () => {
  test('gate is initially open', () => {
    const { getByTestId } = render(<Display />)
    expect(getByTestId('closed-div').textContent).toBe('Open')
    expect(getByTestId('closed-div')).toMatchSnapshot()
  })

  test('gate is initially unlocked', () => {
    const { getByTestId } = render(<Display />)
    expect(getByTestId('unlocked-div').textContent).toBe('Unlocked')
    expect(getByTestId('unlocked-div')).toMatchSnapshot()
  })
})
