const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf8');

const str = data.split('\n');

let cnt = 0;
let terms = '';

function getCount(sentence) {
  let obj = {};
  let count = 0;
  for(let i=0;i<sentence.length;i++) {
    if(!obj[sentence[i]]) {
      obj[sentence[i]] = true;
      count++;
    }
  }
  return count;
}

function loop() {
  for(let i=0;i<str.length;i++) {
    if(str[i]) {
      terms+=str[i];
    } else {
      cnt += getCount(terms);
      terms = '';
    }
  }
}

loop();
cnt += getCount(terms);
console.log('cnt', cnt)