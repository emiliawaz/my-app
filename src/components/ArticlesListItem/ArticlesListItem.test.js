import React from 'react'
import { shallow } from 'enzyme'
import ArticlesListItem from './ArticlesListItem'

let wrapper

beforeEach(() => {
  wrapper = shallow(<ArticlesListItem 
    id={1}
    name={'Article'}
    description={'Decription'}
    created={'01-01-2019'}
    tags={['article', 'topic']}
    />)
})

describe('ArticlesListItem', () => {
  it('renders props', () => {
    expect(wrapper.instance().props.id).toEqual(1)
    expect(wrapper.instance().props.name).toEqual('Article')
    expect(wrapper.instance().props.description).toEqual('Decription')
    expect(wrapper.instance().props.created).toEqual('01-01-2019')
    expect(wrapper.instance().props.tags).toEqual(['article', 'topic'])
  })
})
