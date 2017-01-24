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
  it('should exist', () => {
    expect(wrapper).to.have.length(1)
  })
})
