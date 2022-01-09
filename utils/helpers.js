
const { format } = require('express/lib/response');
const moment = require('moment');

module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString("en-AU");
  },
  format_time: (time) => {
    return moment(time).format("hh:mm a ZZ");
  },
};
