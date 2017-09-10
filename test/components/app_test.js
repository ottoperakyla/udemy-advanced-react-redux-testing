import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

// Tests are always wrapped within functions so that
// test suites like Mocha can safely run them
// without blowing themselfes up if an Error
// gets thrown in the code

// Use 'describe' to group together similar tests
describe('App', () => {
  let component

  beforeEach(() => {
    // Create an instance of App
    component = renderComponent(App)
  })

  // Use 'it' to test a single attribute of a target
  it('shows a comment box', () => {
    // Use 'expect' to make an 'assertion' about a target
    // expect is a function that returns an object with
    // properties like "to.have.class" and "to.contain" (assertion matcher)
    // that can be used for testing

    // This test is pretty flexible because
    // it only checks that a className of .comment-box
    // if found within app
    // instead of checking that
    // an actual "instance" of <CommentBox /> is found
    expect(component.find('.comment-box')).to.exist
  })

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist
  })
  

})
