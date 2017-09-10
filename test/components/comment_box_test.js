import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

// in general you should always write your tests before
// your implementation of the component:
// 1. write your test 
// 2. watch it fail
// 3. write the minimum amount of code for the test to pass
// 4. ???
// 5. profit

// BUT
// if for some case you wrote your implementation before the test
// then you should purposefully break the test atleast once
// to be sure that your test is actually testing something
// and that it behaves correctly

describe('CommentBox', () => {
  // beforeEach is a function that runs before
  // EACH of our "it" -statements (3 times in this case)
  // it is used to setup variables for our "it" -statements
  let component
  beforeEach(() => {
    // renderComponent returns a jQuery object
    // we can then call the chai-jquery matchers on it
    component = renderComponent(CommentBox)

  })

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box')
  })

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist    
  })

  it('has a button', () => {
    expect(component.find('button')).to.exist
  })

  // describes can be nested within a describe!
  // this can be used to group similar tests together
  // within the larger test for the whole component (CommentBox here)
  describe('entering some text', () => {
    // you can have multiple beforeEach in a test (they stack)
    // ALL the beforeEach BEFORE an "it" are run 
    // when running the code inside the "it"
    beforeEach(() => {
      // faking user behaviour here by
      // simulating an event to change the value of the textarea
      // before the "it" tests
      component.find('textarea').simulate('change', 'new comment')
    })

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment')
    })

    it('when submitted, clears the input', () => {
      //console.log(component) // component is the form element
      // send a "submit" -event to the form
      component.simulate('submit')
      expect(component.find('textarea')).to.have.value('')
    })
  })
  
 
})
