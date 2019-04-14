import { combineReducers } from 'redux';
import sanarflixReducer, { INITIAL_STATE as sanarflixInitialState } from './sanarflix';


export default combineReducers({
  sanarflixReducer,
});

export const INITIAL_STATE = {
  sanarflixReducer: sanarflixInitialState
}