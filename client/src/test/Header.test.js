/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import Header from '../components/Header.js'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

// THE HEADER COMPONENT (HOME PAGE / INDEX.HTML)
describe('The home page header DIV element', () => {
  let container
  beforeAll(async () => {
    await act(async () => {
      render(<Header />)
    })
  })
  it('Should have the correct class', async () => {
    await screen.findAllByText('Courses')
    container = document.querySelector('.wrap.header--flex')
    expect(container).toHaveClass('wrap header--flex')
  })
})

describe('The h1 in the header', () => {
  let container
  beforeAll(async () => {
    await act(async () => {
      render(<Header />)
    })
  })
  it('Should have the correct class', async () => {
    await screen.findAllByText('Courses')
    container = document.querySelector('.header--logo')
    expect(container).toHaveClass('header--logo')
  })
  // Failing
  it('Should have a link attribute', async () => {
    const actual = document.querySelector('a')
    expect(actual).toHaveTextContent('Courses')
  })
  // Failing
  it('Should contain the text Courses in the link', async () => {
    const h1Text = 'Courses'
    expect(headerLink).toHaveTextContent(h1Text)
  })
  // Failing
  it('Should have a NAV as a child element', async () => {
    const headerNav = await document.getElementsByTagName('nav')
    expect(container).toContainElement(headerNav)
  })
})
