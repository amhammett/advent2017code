'use strict';

const input_file = process.env.INPUT_FILE || 'data.json'

module.exports = {}

let part1 = data => {
  var checksum = 0

  data.forEach(function(line) {
    var data_line = line.split(' ');
    var diff = Math.max(...data_line) - Math.min(...data_line);
    checksum = parseInt(checksum) + parseInt(diff);
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
