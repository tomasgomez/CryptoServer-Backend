//TODO take off dotenv configuration https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
const dotenv = require('dotenv');

// Config env variables
dotenv.config();

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT,
};