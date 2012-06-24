var fs = require('fs');

var contents = fs.readFileSync('users','utf8');
console.log(contents);
console.log("Hello Node");

var contents = fs.readFileSync('hosts','utf8');
console.log(contents);
console.log("Hello again!");


