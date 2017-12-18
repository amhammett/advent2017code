'use strict';

const input_file = process.env.INPUT_FILE || 'src/input.part1'

module.exports = {}

let part1 = number => {
  var count = 0
  var current_digit = number.charAt(number.length -1)
  number.split('').forEach(function(digit) {
    if(current_digit == digit) {
      count = parseInt(count) + parseInt(digit);
    }
    current_digit = digit;
  })
  return count;  
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
