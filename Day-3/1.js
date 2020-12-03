const fs = require('fs')

const data = fs.readFileSync('./1.input', 'utf8');

const str = data.split('\n');

let row = 1, count = 0, j = 3;

while(row < str.length) {
  console.log(str[row][j])
  if(str[row][j] === '#') count++;
  j = (j + 3) % str[row].length
  row+=1;
}

console.log('count', count)