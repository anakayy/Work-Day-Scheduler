var m = moment();

//day, date, and time
$("#currentDay").text(moment().format("dddd, MMMM Do"));

myStorage = window.localStorage;

//variables for each hour using moment.js
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour13 = $("#13");
var hour14 = $("#14");
var hour15 = $("#15");
var hour16 = $("#16");
var hour17 = $("#17");

//array of each variable hour
var everyHour = [
  hour9,
  hour10,
  hour11,
  hour12,
  hour13,
  hour14,
  hour15,
  hour16,
  hour17,
  hour18,
];
$("#currentDay").text(currentDay);
