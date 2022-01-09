
const { format } = require('express/lib/response');
const moment = require('moment');

module.exports = {
  format_date: (date) => {
    return moment(date).format("dddd, Do MMMM YYYY");
  },
  format_time: (time) => {
    return moment(time).format("h:mm:ss a");
  },
};
