// Actions
const UPDATE_SELECTED_ROADMAP = 'GROW/GROWBOARD/UPDATE_SELECTED_ROADMAP';

// Initial state
export const INITIAL_STATE = {
  selectedRoadmap: '',
}

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case UPDATE_SELECTED_ROADMAP:      
      return {
        ...state,
        selectedRoadmap: 1,
      };
    default:
      return state;
  }
}

// Action Creators
export function updateSelectedRoadmap(roadmap) {
  return { type: UPDATE_SELECTED_ROADMAP, roadmap };
}