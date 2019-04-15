webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/HomeScene/SlidersFeed.js":
/*!*********************************************!*\
  !*** ./components/HomeScene/SlidersFeed.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/carousel/style/css */ "./node_modules/antd/lib/carousel/style/css.js");
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/carousel */ "./node_modules/antd/lib/carousel/index.js");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");










var _jsxFileName = "C:\\Git Clones\\Desafio-Sanar\\components\\HomeScene\\SlidersFeed.js";




var ArrowIcon = function ArrowIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("path", {
    d: "M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z",
    __self: this
  }));
};

ArrowIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 129 129"
};
var FeedWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "SlidersFeed__FeedWrapper",
  componentId: "x5qiwh-0"
})(["padding-top:40px;.slick-slide{padding:0px 10px;}"]);
var SliderHolder = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "SlidersFeed__SliderHolder",
  componentId: "x5qiwh-1"
})(["margin-bottom:40px;h1{font-size:30px;color:#484f52;font-weight:300;margin-left:5vw;}.slick-list{padding-left:5vw;}"]);
var CarouselHeight = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "SlidersFeed__CarouselHeight",
  componentId: "x5qiwh-2"
})(["position relative;"]);
var CarouselRow = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "SlidersFeed__CarouselRow",
  componentId: "x5qiwh-3"
})(["width:100%;height:200px;background:", ";border-radius:5px;display:flex;align-items:flex-end;justify-content:flex-start;padding:15px;span{color:#fff;font-size:18px;max-width:80%;}"], function (props) {
  return !props.background ? "url('".concat(props.background, "')no-repeat center center / cover") : '#000';
});
var PrevButton = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "SlidersFeed__PrevButton",
  componentId: "x5qiwh-4"
})(["height:100%;width:5%;position:absolute;left:0;top:0;z-index:2;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,1);background:-moz-linear-gradient( left,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100% );background:-webkit-gradient( left top,right top,color-stop(0%,rgba(255,255,255,1)),color-stop(100%,rgba(255,255,255,0)) );background:-webkit-linear-gradient( left,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100% );background:-o-linear-gradient( left,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100% );background:-ms-linear-gradient( left,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100% );background:linear-gradient( to right,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100% );svg{fill:#100b23;width:20px;height:20px;transform:rotate(180deg);}:hover{cursor:pointer;}"]);
var NextButton = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "SlidersFeed__NextButton",
  componentId: "x5qiwh-5"
})(["height:100%;width:5%;position:absolute;right:0;top:0;z-index:2;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,1);background:-moz-linear-gradient( left,rgba(255,255,255,0) 0%,rgba(255,255,255,0.4) 100% );background:-webkit-gradient( left top,right top,color-stop(0%,rgba(255,255,255,1)),color-stop(100%,rgba(255,255,255,0.4)) );background:-webkit-linear-gradient( left,rgba(255,255,255,0) 0%,rgba(255,255,255,0.4) 100% );background:-o-linear-gradient( left,rgba(255,255,255,0) 0%,rgba(255,255,255,0.4) 100% );background:-ms-linear-gradient( left,rgba(255,255,255,0) 0%,rgba(255,255,255,0.4) 100% );background:linear-gradient( to right,rgba(255,255,255,0) 0%,rgba(255,255,255,0.4) 100% );svg{fill:#100b23;width:20px;height:20px;}:hover{cursor:pointer;}"]);

var SlidersFeed =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(SlidersFeed, _Component);

  function SlidersFeed() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SlidersFeed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(SlidersFeed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "resolveCursesList", function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(CarouselRow, {
        background: item.imagem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, item.nome));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "RowScroll", function (action, carousel) {
      switch (carousel) {
        case 'curses':
          action === 'Next' ? _this.refs.cursesRef.slick.slickNext() : _this.refs.cursesRef.slick.slickPrev();
          break;

        case 'seen':
          action === 'Next' ? _this.refs.seenRef.slick.slickNext() : _this.refs.seenRef.slick.slickPrev();
          break;

        case 'news':
          action === 'Next' ? _this.refs.newsRef.slick.slickNext() : _this.refs.newsRef.slick.slickPrev();
          break;
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SlidersFeed, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(FeedWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(SliderHolder, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Cursos"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(CarouselHeight, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        ref: "cursesRef",
        dots: false,
        draggable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, this.props.cursesList && this.props.cursesList.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, _this2.resolveCursesList(item, index));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PrevButton, {
        onClick: function onClick() {
          return _this2.RowScroll('Prev', 'curses');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ArrowIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(NextButton, {
        onClick: function onClick() {
          return _this2.RowScroll('Next', 'curses');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ArrowIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(SliderHolder, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "Mais Vistos"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(CarouselHeight, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        ref: "seenRef",
        dots: false,
        draggable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, this.props.cursesList && this.props.cursesList.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, _this2.resolveCursesList(item, index));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PrevButton, {
        onClick: function onClick() {
          return _this2.RowScroll('Prev', 'seen');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ArrowIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(NextButton, {
        onClick: function onClick() {
          return _this2.RowScroll('Next', 'seen');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ArrowIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(SliderHolder, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Novidades"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(CarouselHeight, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        ref: "newsRef",
        dots: false,
        draggable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, this.props.cursesList && this.props.cursesList.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, _this2.resolveCursesList(item, index));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PrevButton, {
        onClick: function onClick() {
          return _this2.RowScroll('Prev', 'news');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ArrowIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(NextButton, {
        onClick: function onClick() {
          return _this2.RowScroll('Next', 'news');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ArrowIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      })))));
    }
  }]);

  return SlidersFeed;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

function mapStateToProps(state) {
  return {
    cursesList: state.sanarflixReducer.cursesList
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(SlidersFeed));

/***/ })

})
//# sourceMappingURL=index.js.532cbdfa4ded1ec3c34b.hot-update.js.map