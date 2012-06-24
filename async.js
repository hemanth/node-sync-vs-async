var fs = require('fs');

var contents = fs.readFile('./users','utf8', function(err,contents){
   console.log(contents);
});
console.log("Hello Node");


var contents = fs.readFile('./hosts','utf8', function(err,contents){
   console.log(contents);
});
console.log("Hello again!");

