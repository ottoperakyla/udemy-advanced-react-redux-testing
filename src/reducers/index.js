import { combineReducers } from 'redux';
import commentsReducer from './comments'

const rootReducer = combineReducers({
  // you can initialize a reducers value 
  // like this without having to build
  // an action and the actual reducer file!
  // this is very helpful when mocking up features
  // and doing test driven development :)
  example: (state = []) => state,
  comments: commentsReducer
});

export default rootReducer;
