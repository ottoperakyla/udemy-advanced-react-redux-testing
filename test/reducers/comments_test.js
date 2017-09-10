import { expect } from '../test_helper'
import commentReducer from '../../src/reducers/comments'
import { SAVE_COMMENT } from '../../src/actions/types'

// Reducer testing example
// one test file per reducer
describe('Comments Reducer', () => {
  
  it('handles action with unknown type', () => {
    //expect(commentReducer()).to.be.instanceof((Array)) // OR 
    expect(commentReducer(undefined, {})).to.eql([]) // eql === deep equality check
  })

  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'test' }
    //expect(commentReducer([], action)).to.be.an('array').that.includes('test') // OR
    expect(commentReducer([], action)).to.eql(['test'])
  })

})


