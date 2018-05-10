var fs = require('fs');
//read contents of file
var buff = fs.readFileSync(process.argv[2]);
//get count of lines as a string
var count = buff.toString().split('\n').length;
// subtract by 1
console.log(count -1);