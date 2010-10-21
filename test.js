var fs = require('fs');
    jsdom  = require("jsdom").jsdom,
    colors = require('colors');

var assert = function (testCase, funcOrBool) {
  var result = (typeof funcOrBool === 'function' ? funcOrBool() : funcOrBool);
  if (result) {
    console.log("* " + testCase + " passed!".green);
  }
  else {
    console.log("* " + testCase + " FAILED!!".red);    
  }
};

fs.readFile('index.html', "ascii", function (err, data) {
  if (err) throw err;

  var window = jsdom(data).createWindow();
  var $ = function (domId) {
    return window.document.getElementById(domId);
  };
  
  console.log();
  console.log("RUNNING TESTS ==================================================================".bold.white);
  console.log();

  console.log("asserting html")
  assert("#tasks exists", $('tasks'));
  assert("#tasks is visible", typeof $('tasks').style.display === "undefined");
  
  console.log();
  console.log("asserting js");
  assert("global app object exists", typeof window.document.app !== 'undefined');
  assert("#tasks is now not visible", $('tasks').style.display == "none");
  
  console.log();
  console.log("TESTS COMPLETED ================================================================".bold.white);
  console.log();
})