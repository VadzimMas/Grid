const path = require('node:path');

var fileName = path.basename('/Users/vadzimmas/Desktop/Gulp-start/app/src/img/0-sheared-images/ico/cat:300:400.jpg');

var width = fileName.split(':')[1];
var hight = (fileName.split(':')[2]).split('.')[0];

console.log(fileName.split(':'));
console.log(width);
console.log(hight);
