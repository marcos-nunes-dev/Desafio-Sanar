import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer, { INITIAL_STATE } from '../ducks';

export function initializeStore(initialState = INITIAL_STATE) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
}