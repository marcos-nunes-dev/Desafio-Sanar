const getConfig = require('next/config').default();
const config = getConfig ? getConfig.publicRuntimeConfig : {};

module.exports = {
  api_url: config.api_url
};
