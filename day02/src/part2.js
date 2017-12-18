'use strict';

const input_file = process.env.INPUT_FILE || 'data.json'

module.exports = {}

let part1 = data => {
  var checksum = 0

  data.forEach(function(line) {
    var line_arr = line.split(' ')

    for(var i=0; i < line_arr.length; i++) {
      for(var j=0; j < line_arr.length; j++) {
        if(i !== j && line_arr[i] % line_arr[j] == 0) {
          checksum = parseInt(checksum) + parseInt(line_arr[i] / line_arr[j])
        }
      }
    }
  });

  return checksum;
};

if (!module.parent) {
  var fs = require('fs')
  fs.readFile(input_file, 'utf8', function (err, raw_data) {
    if (err) {
      return console.log(err);
    }
    console.log(part1(JSON.parse(raw_data)['part1']['puzzle']['input']))
  });
} else {
  console.log("we were require()d from somewhere else")
}
