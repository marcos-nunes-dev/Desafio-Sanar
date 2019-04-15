webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./ducks/sanarflix.js":
/*!****************************!*\
  !*** ./ducks/sanarflix.js ***!
  \****************************/
/*! exports provided: INITIAL_STATE, default, updateCursesList, updateTeachersList, updateModulesList, updateLoginModalState, updateLoginState, fetchDataBegin, fetchDataSuccess, fetchDataFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCursesList", function() { return updateCursesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTeachersList", function() { return updateTeachersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModulesList", function() { return updateModulesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLoginModalState", function() { return updateLoginModalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLoginState", function() { return updateLoginState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataBegin", function() { return fetchDataBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataSuccess", function() { return fetchDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataFailure", function() { return fetchDataFailure; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

// Actions
var UPDATE_CURSES_LIST = 'SANAR/SANARFLIX/UPDATE_CURSES_LIST';
var UPDATE_TEACHERS_LIST = 'SANAR/SANARFLIX/UPDATE_TEACHERS_LIST';
var UPDATE_MODULE_LIST = 'SANAR/SANARFLIX/UPDATE_MODULE_LIST';
var UPDATE_MODAL_LOGIN_STATE = 'SANAR/SANARFLIX/UPDATE_MODAL_LOGIN_STATE';
var UPDATE_LOGIN_STATE = 'SANAR/SANARFLIX/UPDATE_LOGIN_STATE';
var FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
var FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
var FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'; // Initial state

var INITIAL_STATE = {
  cursesList: [],
  teachersList: [],
  moduleList: [],
  loginModalState: false,
  userIsLoggedIn: false,
  loading: false,
  erro: null
}; // Reducer

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true,
        error: null
      });

    case FETCH_DATA_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        items: action.payload.data
      });

    case FETCH_DATA_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: action.payload.error
      });

    case UPDATE_CURSES_LIST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        cursesList: action.list
      });

    case UPDATE_TEACHERS_LIST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        teachersList: action.list
      });

    case UPDATE_MODULE_LIST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        moduleList: action.list
      });

    case UPDATE_MODAL_LOGIN_STATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loginModalState: !state.loginModalState
      });

    case UPDATE_LOGIN_STATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        userIsLoggedIn: !state.userIsLoggedIn
      });

    default:
      return state;
  }
} // Action Creators

function updateCursesList(list) {
  return {
    type: UPDATE_CURSES_LIST,
    list: list
  };
}
function updateTeachersList(list) {
  return {
    type: UPDATE_TEACHERS_LIST,
    list: list
  };
}
function updateModulesList(list) {
  return {
    type: UPDATE_MODULE_LIST,
    list: list
  };
}
function updateLoginModalState() {
  return {
    type: UPDATE_MODAL_LOGIN_STATE
  };
}
function updateLoginState() {
  return {
    type: UPDATE_LOGIN_STATE
  };
}
var fetchDataBegin = function fetchDataBegin() {
  return {
    type: FETCH_DATA_BEGIN
  };
};
var fetchDataSuccess = function fetchDataSuccess(products) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      products: products
    }
  };
};
var fetchDataFailure = function fetchDataFailure(error) {
  return {
    type: FETCH_DATA_FAILURE,
    payload: {
      error: error
    }
  };
};

/***/ })

})
//# sourceMappingURL=index.js.16fdcd349994229c295c.hot-update.js.map