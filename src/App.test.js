import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Home from 'components/Home/Home'

describe('App', () => {
  it('renders child components', () => {
    const wrapper = mount(<App/>)

    expect(wrapper.find(Home).exists()).toBe(true)
  })
})
