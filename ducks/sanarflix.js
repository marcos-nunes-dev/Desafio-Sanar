import axios from 'axios';

// Actions
const UPDATE_CURSES_LIST = 'SANAR/SANARFLIX/UPDATE_CURSES_LIST';
const UPDATE_TEACHERS_LIST = 'SANAR/SANARFLIX/UPDATE_TEACHERS_LIST';
const UPDATE_MODULE_LIST = 'SANAR/SANARFLIX/UPDATE_MODULE_LIST';
const UPDATE_MODAL_LOGIN_STATE = 'SANAR/SANARFLIX/UPDATE_MODAL_LOGIN_STATE';
const UPDATE_LOGIN_STATE = 'SANAR/SANARFLIX/UPDATE_LOGIN_STATE';

// Initial state
export const INITIAL_STATE = {
  cursesList: [],
  teachersList: [],
  moduleList: [],
  loginModalState: false,
  userIsLoggedIn: false,
};

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case UPDATE_CURSES_LIST:
      return {
        ...state,
        cursesList: action.list,
      };
    case UPDATE_TEACHERS_LIST:
      return {
        ...state,
        teachersList: action.list,
      };
    case UPDATE_MODULE_LIST:
      return {
        ...state,
        moduleList: action.list,
      };
    case UPDATE_MODAL_LOGIN_STATE:
      return {
        ...state,
        loginModalState: !state.loginModalState,
      };
    case UPDATE_LOGIN_STATE:
      return {
        ...state,
        userIsLoggedIn: !state.userIsLoggedIn,
      };
    default:
      return state;
  }
}

// Action Creators
export function updateCursesList(list) {
  return { type: UPDATE_CURSES_LIST, list };
}

export function updateTeachersList(list) {
  return { type: UPDATE_TEACHERS_LIST, list };
}

export function updateModulesList(list) {
  return { type: UPDATE_MODULE_LIST, list };
}

export function updateLoginModalState() {
  return { type: UPDATE_MODAL_LOGIN_STATE };
}

export function updateLoginState() {
  return { type: UPDATE_LOGIN_STATE };
}

export function fetchCursesDetails() {
  return function(dispatch) {
    return axios
      .get('https://5b7570f8deca780014ec9f86.mockapi.io/v1/cursos')
      .then(({ data }) => {
        dispatch(updateCursesList(data));
      });
  };
}

export function fetchTeachersDetails() {
  return function(dispatch) {
    return axios
      .get('https://5b7570f8deca780014ec9f86.mockapi.io/v1/professores')
      .then(({ data }) => {
        dispatch(updateTeachersList(data));
      });
  };
}

export function fetchModulesDetails() {
  return function(dispatch) {
    return axios
      .get('https://5b7570f8deca780014ec9f86.mockapi.io/v1/modulos')
      .then(({ data }) => {
        dispatch(updateModulesList(data));
      });
  };
}
