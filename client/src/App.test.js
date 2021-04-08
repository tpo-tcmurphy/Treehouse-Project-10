/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import App from './App'
import { act } from 'react-dom/test-utils'

const { rerender } = render(<App />) // Allows for different props to be passed in as needed

// HOME PAGE / INDEX.HTML
describe('The home page', () => {
  test('Should have a header element under the root div', async () => {
    rerender(<App />)
    const rootDiv = await document.getElementById('root')
    const headerElement = await document.getElementsByTagName('header')
    expect(rootDiv).toContainElement(headerElement)
  })
})

describe('The home page header element', () => {
  test.skip('Should have a div element', async () => {
    rerender(<App />)
    const headerElement = await document.getElementsByTagName('header')
    const headerDiv = await document.getElementsByTagName('div')
    expect(headerElement).toContainElement(headerDiv)
  })
})

describe('The home page header DIV element', () => {
  test.skip('Should have a class of wrap header--flex', async () => {
    rerender(<App />)
    const headerDiv = await document.getElementsByTagName('header').firstElementChild
    expect(headerDiv).toHaveClass('wrap header--flex')
  })
})

describe('The home page header DIV element', () => {
  test.skip('Should have a h1 element', async () => {
    rerender(<App />)
    const headerDiv = await document.querySelector('.wrap header--flex')
    const headerH1 = await document.getElementsByTagName('h1')
    expect(headerDiv).toContainElement(headerH1)
  })
})

describe('The h1 in the header', () => {
  test.skip('Should have a header--logo class', async () => {
    rerender(<App />)
    const headerH1 = await document.getElementsByTagName('h1')
    expect(headerH1).toHaveClass('header--logo')
  })
})

describe('The h1 in the header', () => {
  test.skip('Should have a link attribute', async () => {
    rerender(<App />)
    const headerH1 = await document.getElementsByTagName('h1')
    const headerLink = await document.querySelector("a[href='index.html']")
    expect(headerH1).toContainElement(headerLink)
  })
})


