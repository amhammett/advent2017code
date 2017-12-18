'use strict';

const input_file = process.env.INPUT_FILE || 'src/input'

module.exports = {}

let part1 = number => {
  var count = 0
  var split_length = (number.length)/2
  console.log('length = ' + split_length)

  for(var i=0; i< split_length; i++) {
    if(number[i] == number[i+split_length]) {
      count = parseInt(count) + parseInt(number[i]);
    }
  }

  return count*2;
};

if (!module.parent) {
  var fs = require('fs')
  fs.readFile(input_file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(part1(data.trim()))
  });
} else {
  console.log("we were require()d from somewhere else")
}
