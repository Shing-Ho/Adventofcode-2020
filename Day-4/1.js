const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf8');

const str = data.split('\n');

let cnt = 0;

const checkValid = sentence => {
  const terms = sentence.split(' ');
  let partCnt = 0, cid = 0;
  for(let i=0; i<terms.length; i++) {
    if(terms[i]) {
      partCnt++;
      if(terms[i].split(':')[0] === 'cid') {
        cid++;
      }
    }
  }
  if(partCnt + (1 - cid) >= 8) {
    cnt++;
  } else {
    console.log('sentence', sentence)
  }
}

let currentPassport = ''
for(let i=0; i<str.length; i++) {
  if(str[i]) {
    currentPassport += str[i] + ' ';
  } else {
    checkValid(currentPassport);
    currentPassport = '';
  }
}
checkValid(currentPassport)

console.log('cnt', cnt)