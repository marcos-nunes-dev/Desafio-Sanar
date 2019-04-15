/* eslint-disable */
const withCss = require('@zeit/next-css')

if (typeof require !== "undefined") {
  require.extensions[".less"] = () => { };
  require.extensions[".css"] = (file) => { };
}

module.exports = withCss()