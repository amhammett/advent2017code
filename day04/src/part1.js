'use strict';

const input_file = process.env.INPUT_FILE || 'data.txt'

module.exports = {}

let part1 = line => {
  var line_arr = line.split(' ')
  for(var i = 0; i< line_arr.length; i++) {
    var word = line_arr[i]
    line_arr[i] = ''
    if (line_arr.includes(word)) {
      return 0
    }
  }
  //console.log(line)
  return 1
};

if (!module.parent) {
  var fs = require('fs')
  fs.readFile(input_file, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    var count = 0

    data.split('\n').forEach(function(line) {
      count = parseInt(count) + parseInt(part1(line))
    })

    console.log(count)
  });
} else {
  console.log("we were require()d from somewhere else")
}
