'use strict';

const input_file = process.env.INPUT_FILE || 'data.json'

module.exports = {}

let part1 = number => {
  var walk = 0
  var base_size = Math.ceil(Math.sqrt(number))
  if(base_size % 2 == 0) {
    base_size = parseInt(base_size)+1
  }
  var arm = base_size * base_size
  var max = base_size - 1
  var min = Math.floor(base_size / 2)

  var distance = max
  var direction = 'down'

  for(var arm = base_size * base_size; arm > (base_size-2) * (base_size-2); arm--) {
    if(arm == number) {
      return distance;
    }

    if(direction === 'down') {
      distance = parseInt(distance) - 1
      if(parseInt(distance) == parseInt(min)) {
        direction = 'up'
      }
    } else {
      distance = parseInt(distance) + 1
      if(parseInt(distance) == parseInt(max)) {
        direction = 'down'
      }
    }
  }

  return 0
};

if (!module.parent) {
  var fs = require('fs')
  fs.readFile(input_file, 'utf8', function (err, raw_data) {
    if (err) {
      return console.log(err);
    }
    JSON.parse(raw_data)['part1']['examples'].forEach(function(example) {
      console.log("input: " + example['input'])
      console.log("expected: " + example['solution'])
      console.log("actual: " + part1(example['input']))
    })

    console.log("input: "+ JSON.parse(raw_data)['part1']['puzzle']['input'])
    console.log("solution: "+part1(JSON.parse(raw_data)['part1']['puzzle']['input']))
  });
} else {
  console.log("we were require()d from somewhere else")
}
