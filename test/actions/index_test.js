import { expect } from '../test_helper'
import { SAVE_COMMENT } from '../../src/actions/types'
import { saveComment } from '../../src/actions'

// Actions testing example
// all action tests are in same file
describe('actions', () => {

  describe('saveComment', () => {

    it('has the correct type', () => {
      const action = saveComment()
      expect(action.type).to.equal(SAVE_COMMENT)
    })

    it('has the correct payload', () => {
      const action = saveComment('test')
      expect(action.payload).to.equal('test')
    })

  })

})
