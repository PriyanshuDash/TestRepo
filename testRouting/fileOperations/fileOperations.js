var path = require('path');


// To get filename
var filename = path.basename('/Users/References/demo_path.js');
console.log(filename);

// To get directory
var directory = path.dirname('/Users/References/demo_path.js');
console.log(directory);

// To get extension name
var ext = path.extname('/Users/References/demo_path.js');
console.log(ext);

// To join
var x = path.join('Users', 'References', 'demo_path.js');
console.log(x);