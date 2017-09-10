import { renderComponent, expect } from '../test_helper'
import CommentList from '../../src/components/comment_list'

describe('CommentList', () => {
  let component

  beforeEach(() => {
    // third argument to renderComponent
    // are the props passed to the component
    const props = {
      comments: ['foo', 'bar']
    }
    component = renderComponent(CommentList, null, props)
  })

  it('shows an <li> for each comment', () => {
    expect(component.find('li').length).to.equal(2)
  })
  
  it('shows each comment that is provided', () => {
    //expect(component.find('li').eq(0)).to.have.text('foo')
    //expect(component.find('li').eq(1)).to.have.text('bar')
    // or just like this, since we already saw that we have two <li>
    // in the previous test
    expect(component).to.contain('foo')
    expect(component).to.contain('bar')
  })

})