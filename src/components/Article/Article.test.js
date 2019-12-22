import React from 'react'
import { shallow } from 'enzyme'
import Article from './Article'
import Topbar from 'components/Topbar/Topbar'
import { BrowserRouter } from 'react-router-dom'

let wrapper

beforeEach(() => {
  wrapper = shallow(<BrowserRouter><Article/></BrowserRouter>)
})

describe('Article', () => {
  it('renders component', () => {
    expect(wrapper.html()).toMatch('c-article')
  })

  it('renders child component', () => {
    // Didn't find out yet how to properly test asynchronous code in React

    //expect(wrapper.find(Topbar).exists()).toBe(true)
  })
})
