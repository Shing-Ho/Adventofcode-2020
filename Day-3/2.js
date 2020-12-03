const fs = require('fs')

const data = fs.readFileSync('./1.input', 'utf8');

const str = data.split('\n');


function move(x, y) {
  let row = y, count = 0, j = x;
  while(row < str.length) {
    if(str[row][j] === '#') count++;
    j = (j + x) % str[row].length
    row+=y;
  }
  return count;
}

console.log('count', move(1,1))
console.log('count', move(3,1))
console.log('count', move(5,1))
console.log('count', move(7,1))
console.log('count', move(1,2))
console.log('mul', move(1,1) * move(3,1) * move(5,1) * move(7,1) * move(1,2))