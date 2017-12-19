'use strict';

const input_file = process.env.INPUT_FILE || 'data.txt'

module.exports = {}

let part1 = data => {
  let step
  let count = 0
  let index = 0

  while(index < data.length -1) {
    count++
    step = data[index]
    data[index]++
    index = index + parseInt(step)
  }
  return count
}

if (!module.parent) {
  var fs = require('fs')
  fs.readFile(input_file, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(part1(data.split('\n')))
  });
} else {
  console.log("we were require-d from somewhere else")
}
