import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount, render } from 'enzyme'
import Header from './component'

chai.use(chaiEnzyme())

describe('Header component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })
  // does it render?
  it('should exist', () => {
    expect(wrapper).to.have.length(1)
  })
  // does it render the correct thing?

  // does it handle state properly?

  // do the events work properly?

  // edge cases?
})
