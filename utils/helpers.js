
const { format } = require('express/lib/response');
const moment = require('moment');

module.exports = {
  format_date: (date) => {
    return moment(date).format("Do MMMM YYYY");
  },
  format_shortdate: (date) => {
    return moment(date).format("DD/MM/YYYY")
  },
  format_time: (time) => {
    return moment(time).format("hh:mm:ss a");
  },
};
