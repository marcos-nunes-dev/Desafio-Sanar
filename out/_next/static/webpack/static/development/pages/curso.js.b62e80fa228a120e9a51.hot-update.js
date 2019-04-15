webpackHotUpdate("static\\development\\pages\\curso.js",{

/***/ "./components/CurseScene/ContentPage.js":
/*!**********************************************!*\
  !*** ./components/CurseScene/ContentPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/collapse/style/css */ "./node_modules/antd/lib/collapse/style/css.js");
/* harmony import */ var antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/collapse */ "./node_modules/antd/lib/collapse/index.js");
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");








var _jsxFileName = "C:\\Git Clones\\Desafio-Sanar\\components\\CurseScene\\ContentPage.js";



var CheckIcon = function CheckIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
    d: "M153.504 366.839c-8.657 0-17.323-3.302-23.927-9.911L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.386c13.218-13.214 34.65-13.218 47.859 0 13.222 13.218 13.222 34.65 0 47.863L177.436 356.928c-6.609 6.605-15.271 9.911-23.932 9.911z",
    __self: this
  }));
};

CheckIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 426.67 426.67"
};
var Panel = antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7___default.a.Panel;
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "ContentPage__ContentWrapper",
  componentId: "sc-13sx4pt-0"
})(["width:70%;padding:0 10%;margin-top:50px;"]);
var TextAboutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "ContentPage__TextAboutWrapper",
  componentId: "sc-13sx4pt-1"
})(["color:#656e70;line-height:24px;font-size:19px;margin-top:60px;p{margin-bottom:40px;}"]);
var BoxInfo = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "ContentPage__BoxInfo",
  componentId: "sc-13sx4pt-2"
})(["background:#f0faf2;border:1px solid #ccf2d4;display:flex;align-items:flex-start;padding:10px;font-size:16px;margin-bottom:20px;span{width:90%;}"]);
var BoxIconHolder = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "ContentPage__BoxIconHolder",
  componentId: "sc-13sx4pt-3"
})(["width:2.5%;height:100%;margin-right:10px;svg{width:100%;fill:#43a25f;}"]);
var CollapseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "ContentPage__CollapseWrapper",
  componentId: "sc-13sx4pt-4"
})(["margin-top:30px;.ant-collapse-header{font-size:18px !important;font-weight:500 !important;}"]);
var InsidePanel = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "ContentPage__InsidePanel",
  componentId: "sc-13sx4pt-5"
})(["padding:15px;ul{list-style:none;}ul li{font-size:18px;}"]);

var ContentPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ContentPage, _Component);

  function ContentPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContentPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ContentPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ContentPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ContentWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TextAboutWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "O que voc\xEA vai aprender"), this.props.data && this.props.data.map(function (item, index) {
        return index === 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, item.conteudos && item.conteudos.map(function (conteudo, key) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BoxInfo, {
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BoxIconHolder, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(CheckIcon, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, conteudo.titulo));
        }));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TextAboutWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Conte\xFAdo do Curso"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(CollapseWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7___default.a, {
        defaultActiveKey: ['0'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, this.props.data && this.props.data.map(function (item, index) {
        return index !== 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Panel, {
          header: item.nome,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(InsidePanel, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, item.conteudos && item.conteudos.map(function (conteudo, key) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          }, conteudo.titulo, " (", conteudo.tipio, ")");
        }))));
      })))));
    }
  }]);

  return ContentPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./components/common/SearchBar.js":
/*!****************************************!*\
  !*** ./components/common/SearchBar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "C:\\Git Clones\\Desafio-Sanar\\components\\common\\SearchBar.js";



var SearchIcon = function SearchIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
    d: "M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z",
    __self: this
  }));
};

SearchIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 56.966 56.966"
};



var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SearchBar__SearchInput",
  componentId: "wo3873-0"
})(["width:100%;position:relative;input{width:100%;width:-webkit-fill-available;padding:7px 15px;padding-right:45px;background:#ffffff1a;border:1px solid #ffffff26;border-radius:3px;color:#fff;}input::placeholder{color:#ffffff9c;}input:focus,input:active{box-shadow:0;outline:0;}"]);
var IconHolder = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SearchBar__IconHolder",
  componentId: "wo3873-1"
})(["position:absolute;right:15px;top:50%;transform:translateY(-50%);width:15px;height:15px;svg{fill:#fff;}:before{content:'';position:absolute;z-index:2;height:90%;left:-15px;top:50%;transform:translateY(-50%);border-left:1px solid #ffffff9c;}"]);
var SearchPanelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SearchBar__SearchPanelWrapper",
  componentId: "wo3873-2"
})(["position:absolute;bottom:0;left:0;z-index:9;background:#161a31;width:100%;transform:translateY(100%);"]);
var SearchPanelItem = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SearchBar__SearchPanelItem",
  componentId: "wo3873-3"
})(["padding:20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #ffffff54;p{margin-bottom:0px;transition:all .3s;}span{color:#ffffff54;}:hover{cursor:pointer;}:hover p{opacity:.5;}"]);

var SearchBar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SearchBar, _Component);

  function SearchBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchBar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "SearchPanel", function () {
      if (_this.state.searchText.length > 3) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SearchPanelWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, _this.state.result.map(function (res) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SearchPanelItem, {
            key: res.id,
            onClick: function onClick() {
              return next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/curso');
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }, res.nome), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          }, res.area));
        }));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (event) {
      _this.setState({
        searchText: event.target.value
      });

      _this.setState({
        result: lodash__WEBPACK_IMPORTED_MODULE_11___default.a.filter(_this.props.cursesList, function (o) {
          return lodash__WEBPACK_IMPORTED_MODULE_11___default.a.includes(o.nome, _this.state.searchText);
        })
      });
    });

    _this.state = {
      searchText: '',
      result: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SearchInput, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(IconHolder, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SearchIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        placeholder: "Busque seu curso...",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), this.SearchPanel());
    }
  }]);

  return SearchBar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

function mapStateToProps(state) {
  return {
    cursesList: state.sanarflixReducer.cursesList
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(SearchBar));

/***/ })

})
//# sourceMappingURL=curso.js.b62e80fa228a120e9a51.hot-update.js.map