/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import Courses from '../components/Courses.js'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

// THE COURSES COMPONENT
describe('The Course component', () => {
  let container
  beforeAll(async () => {
    await act(async () => {
      render(<Courses />)
    })
  })
  it.skip('Should be in a MAIN element under the root and header DIV', async () => {
    const rootDiv = await document.getElementById('root')
    const header = await document.getElementsByTagName('header')
    const main = await document.getElementsByTagName('main')
    expect(rootDiv).toContainElement(header && main)
  })
  it.skip('Should have a DIV with a class of wrap main--grid', async () => {
    const main = await document.getElementsByTagName('main')
    const mainDiv = await document.getElementsByTagName('div')
    expect(document.getElementsByTagName('main')).toContainElement(mainDiv) && expect(mainDiv).toHaveClass('wrap main--grid')
  })
  it.skip('Should have at least one course shown', async () => {
    const courseDiv = await document.querySelectorAll('.course--module course--link')
    expect(courseDiv.length).to.be.greater.than(0)
  })
})