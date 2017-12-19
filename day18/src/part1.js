'use strict';

const input_file = process.env.INPUT_FILE || 'data.txt'

module.exports = {}

var last_played;
var skip = 0;

let operation = data => {
  let data_arr = data.split(' ')
  if (data_arr[0] != '') {
    return {
      action: data_arr[0],
      target: data_arr[1] || '',
      value: data_arr[2] || ''
    }
  }
}

let part1 = data => {
  let memory = {}
  for(let index = 0; index < data.length; index++) {
    let instruction=operation(data[index])

    if(!(instruction.target in memory)) {
      memory[instruction.target] = 0
    }

    if(instruction) {
      if(!(parseInt(instruction.value))) {
        instruction.value = parseInt(memory[instruction.value])
      }

      switch(instruction.action) {
        case 'snd':
          last_played = memory[instruction.target]
          break;
        case 'set':
          memory[instruction.target] = instruction.value
          break;
        case 'add':
          memory[instruction.target] = parseInt(memory[instruction.target]) + parseInt(instruction.value)
          break;
        case 'mul':
          memory[instruction.target] = memory[instruction.target] * instruction.value
          break;
        case 'mod':
          memory[instruction.target] = memory[instruction.target] % instruction.value
          break;
        case 'rcv':
          if(memory[instruction.target] !== 0) {
            return last_played
          }
          break;
        case 'jgz':
          if(memory[instruction.target] > 0) {
            index = index + parseInt(instruction.value) -1
          }
          break;
        default:
          console.log('instruction not found: ' + instruction.action)
      }
    }
  }
  return 'end'
}
/*
snd X plays a sound with a frequency equal to the value of X.
set X Y sets register X to the value of Y.
add X Y increases register X by the value of Y.
mul X Y sets register X to the result of multiplying the value contained in register X by the value of Y.
mod X Y sets register X to the remainder of dividing the value contained in register X by the value of Y (that is, it sets X to the result of X modulo Y).
rcv X recovers the frequency of the last sound played, but only when the value of X is not zero. (If it is zero, the command does nothing.)
jgz X Y jumps with an offset of the value of Y, but only if the value of X is greater than zero. (An offset of 2 skips the next instruction, an offset of -1 jumps to the previous instruction, and so on.)
*/
if (!module.parent) {
  var fs = require('fs')
  fs.readFile(input_file, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log('====> '+part1(data.split('\n')))
  });
} else {
  console.log("we were require-d from somewhere else")
}