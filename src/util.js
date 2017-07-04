var dateformat = require('dateformat');
var moment = require('moment');
var now = new Date();

console.log(dateformat(now, 'yyyy/mm/dd HH:MM:ss'));

console.log(moment().format('YYYY/MM/DD HH:mm:ss'));
