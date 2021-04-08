import { render, screen } from '@testing-library/react'
import App from './App'

// HOME PAGE / INDEX.HTML

// HEADER TESTS
test('The home page should have a header element under the root div', () => {
  render(<App />)
  const rootDiv = document.getElementById('root')
  const headerElement = document.getElementsByTagName('header')
  expect(rootDiv).toContainElement(headerElement)
})

skip test('The header element should have a div element', () => {
  render(<App />)
  const headerElement = document.getElementsByTagName('header')
  const headerDiv = document.getElementsByTagName('div')
  expect(headerElement).toContainElement(headerDiv)
})

skip test('The header div should have a class of wrap header--flex', () => {
  render(<App />)
  const headerDiv = document.getElementsByTagName('header').firstElementChild
  expect(headerDiv).toHaveClass('wrap header--flex')
})

skip test('The header div should have a h1 element', () => {
  render(<App />)
  const headerDiv = document.querySelector('.wrap header--flex')
  const headerH1 = document.getElementsByTagName('h1')
  expect(headerDiv).toContainElement(headerH1)
})

