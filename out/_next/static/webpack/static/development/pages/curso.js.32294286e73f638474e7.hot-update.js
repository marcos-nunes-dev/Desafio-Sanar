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
      console.log(this.props.data);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ContentWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TextAboutWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "O que voc\xEA vai aprender"), this.props.data && this.props.data.map(function (item, index) {
        return index === 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, item.conteudos && item.conteudos.map(function (conteudo, key) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BoxInfo, {
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BoxIconHolder, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(CheckIcon, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, conteudo.titulo));
        }));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TextAboutWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Conte\xFAdo do Curso"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(CollapseWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7___default.a, {
        defaultActiveKey: ['0'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, this.props.data && this.props.data.map(function (item, index) {
        return index !== 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Panel, {
          header: item.nome,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(InsidePanel, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, item.conteudos && item.conteudos.map(function (conteudo, key) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, conteudo.titulo, " (", conteudo.tipio, ")");
        }))));
      })))));
    }
  }]);

  return ContentPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=curso.js.32294286e73f638474e7.hot-update.js.map