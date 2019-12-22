import React from 'react'
import { mount } from 'enzyme'
import Home from './Home'
import ArticlesListItem from 'components/ArticlesListItem/ArticlesListItem'

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve))
}
let wrapper

beforeEach(() => {
  wrapper = mount(<Home/>)
})

describe('Home', () => {
  it('renders text', () => {
    const text = wrapper.find('h1').text()

    expect(text).toEqual('Articles List')
  })

  it('calls componentDidMount', async () => {
    // Didn't find out yet how to properly test asynchronous code in React

    // return flushPromises().then(() => {
    //   expect(wrapper.find(ArticlesListItem).exists()).toBe(true)
    //   expect(wrapper.state().articles.length).toBeGreaterThan(0)
    // })
  })
})
