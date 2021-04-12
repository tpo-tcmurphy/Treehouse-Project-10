/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import App from './components/App.js'
import Courses from './components/Courses.js'
import { act } from 'react-dom/test-utils'

const { rerender } = render(<App />) // Allows for different props to be passed in as needed

// THE APP COMPONENT (HOME PAGE / INDEX.HTML)
describe('The home page', () => {
  it.skip('Should have a header element under the root div', async () => {
    rerender(<App />)
    const rootDiv = document.getElementById('root')
    const headerElement = document.getElementsByTagName('header')
    expect(rootDiv).toContainElement(headerElement)
  })
})

describe('The home page header element', () => {
  it.skip('Should have a div element', async () => {
    rerender(<App />)
    const headerElement = await document.getElementsByTagName('header')
    const headerDiv = await document.getElementsByTagName('div')
    expect(headerElement).toContainElement(headerDiv)
  })
})

describe('The home page header DIV element', () => {
  it.skip('Should have a class of wrap header--flex', async () => {
    rerender(<App />)
    const headerDiv = await document.getElementsByTagName('header').firstElementChild
    expect(headerDiv).toHaveClass('wrap header--flex')
  })
})

describe('The home page header DIV element', () => {
  it.skip('Should have a h1 element', async () => {
    rerender(<App />)
    const headerDiv = await document.querySelector('.wrap header--flex')
    const headerH1 = await document.getElementsByTagName('h1')
    expect(headerDiv).toContainElement(headerH1)
  })
})

describe('The h1 in the header', () => {
  it.skip('Should have a header--logo class', async () => {
    rerender(<App />)
    const headerH1 = await document.getElementsByTagName('h1')
    expect(headerH1).toHaveClass('header--logo')
  })
  it.skip('Should have a link attribute', async () => {
    rerender(<App />)
    const headerH1 = await document.getElementsByTagName('h1')
    const headerLink = await document.querySelector("a[href='index.html']")
    expect(headerH1).toContainElement(headerLink)
  })
  it.skip('Should contain the text Courses in the link', async () => {
    rerender(<App />)
    const headerLink = await document.querySelector("a[href='index.html']")
    const h1Text = 'Courses'
    expect(headerLink).toHaveTextContent(h1Text)
  })
  it.skip('Should have a NAV as a child element', async () => {
    rerender(<App />)
    const headerH1 = await document.getElementsByTagName('h1')
    const headerNav = await document.getElementsByTagName('nav')
    expect(headerH1).toContainElement(headerNav)
  })
})

// THE COURSES COMPONENT
describe('The Course component', () => {
  it.skip('Should be in a MAIN element under the root and header DIV', async () => {
    rerender(<App />)
    render(<Courses />)
    const rootDiv = await document.getElementById('root')
    const header = await document.getElementsByTagName('header')
    const main = await document.getElementsByTagName('main')
    expect(rootDiv).toContainElement(header && main)
  })
  it.skip('Should have a DIV with a class of wrap main--grid', async () => {
    rerender(<Courses />)
    const main = await document.getElementsByTagName('main')
    const mainDiv = await document.getElementsByTagName('div')
    expect(document.getElementsByTagName('main')).toContainElement(mainDiv) && expect(mainDiv).toHaveClass('wrap main--grid')
  })
  it.skip('Should have at least one course shown', async () => {
    rerender(<Courses />)
    const courseDiv = await document.querySelectorAll('.course--module course--link')
    expect(courseDiv.length).to.be.greater.than(0)
  })
})