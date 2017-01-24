import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount, render } from 'enzyme'
import Editor from './component'

chai.use(chaiEnzyme())

describe('Editor component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Editor />)
  })
  it('should exist', () => {
    expect(wrapper).to.have.length(1)
  })
})
