import React from 'react'
import { shallow } from 'enzyme'
import Topbar from './Topbar'
import { BrowserRouter } from 'react-router-dom'

describe('Topbar', () => {
  it('renders link', () => {
    const wrapper = shallow(<BrowserRouter><Topbar/></BrowserRouter>)

    expect(wrapper.html()).toMatch('Back to Articles')
    expect(wrapper.html()).toMatch('/')
  })
})
