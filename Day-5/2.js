const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf8');

const str = data.split('\n');

function checkSeat(line) {
  let start = 0, end = 127, sum = 0;
  for(let i = 0; i < 7; i++) {
    if(line[i] === 'F') {
      end = ((end - start) - (end - start) % 2) / 2 + start;
    }
    if(line[i] === 'B') {
      start = ((end - start) + (end - start) % 2) /2 + start;
    }
  }
  sum = line[6] === 'F' ? start * 8 : end * 8;
  start = 0;
  end = 7;
  for(let i = 7; i < 10; i++) {
    if(line[i] === 'L') {
      end = ((end - start) - (end - start) % 2) / 2 + start;
    }
    if(line[i] === 'R') {
      start = ((end - start) + (end - start) % 2) /2 + start;
    }
  }
  return sum + (line[9] === 'L' ? start : end);
}

let arr = []
for(let i=0;i<str.length;i++) {
  arr.push(parseInt(checkSeat(str[i]), 10))
}

arr.sort((a,b) => parseInt(a, 10)- parseInt(b, 10))

for(let i=0;i<arr.length - 1;i++) {
  if(arr[i] + 1 !== arr[i + 1]) {
    console.log(arr[i], arr[i + 1])
  }
}

// console.log('arr', arr)