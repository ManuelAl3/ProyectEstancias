//funciones para handlebars
const { format } = require('timeago.js');

const helpers = {};

helpers.timeago = (timestamp) => {
    timeagoInstance.format(timestamp);
};

module.exports = helpers;