const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf8');

const str = data.split('\n');

let cnt = 0;
let terms = '';
let lineCnt = 0;

function getCount(sentence, lineCnt) {
  let obj = {};
  let count = 0;
  for(let i=0;i<sentence.length;i++) {
    if(!obj[sentence[i]]) {
      obj[sentence[i]] = 1;
    } else {
      obj[sentence[i]]++;
    }
  }
  for(let i=0;i<26;i++) {
    if(obj[String.fromCharCode('a'.charCodeAt() + i)] === lineCnt) {
      count++;
    }
  }
  return count;
}

function loop() {
  for(let i=0;i<str.length;i++) {
    if(str[i]) {
      terms+=str[i];
      lineCnt++;
    } else {
      cnt += getCount(terms, lineCnt);
      terms = '';
      lineCnt = 0;
    }
  }
}

loop();
cnt += getCount(terms, lineCnt);
console.log('cnt', cnt)