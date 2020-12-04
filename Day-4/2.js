const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf8');

const str = data.split('\n');

let cnt = 0;

const checkValid = sentence => {
  const terms = sentence.split(' ');
  let partCnt = 0, cid = 0;
  for(let i=0; i<terms.length; i++) {
    if(terms[i]) {
      const first = terms[i].split(':')[0], second = terms[i].split(':')[1];
      if(first === 'byr' && parseInt(second, 10) >= 1920 && parseInt(second, 10) <= 2002) {
        partCnt++;
      }
      if(first === 'iyr' && parseInt(second, 10) >= 2010 && parseInt(second, 10) <= 2020) {
        partCnt++;
      }
      if(first === 'eyr' && parseInt(second, 10) >= 2020 && parseInt(second, 10) <= 2030) {
        partCnt++;
      }
      if(first === 'hgt') {
        if(second.endsWith('in') && parseInt(second.replace('in', ''), 10) >= 59 && parseInt(second.replace('in', ''), 10) <=76) {
          partCnt++;
        } else if(second.endsWith('cm') && parseInt(second.replace('cm', ''), 10) >= 150 && parseInt(second.replace('cm', ''), 10) <=193) {
          partCnt++;
        }
      }
      if(first === 'hcl' && second[0] === '#' && second.length === 7) {
        let flag = 0;
        const tmp = second.replace('#', '')
        for(let j=0;j<6;j++) {
          if((tmp[j] >= '0' && tmp[j] <= '9') || (tmp[j] >= 'a' && tmp[j] <= 'f')) {
            flag++;
          }
        }
        if(flag === 6) {
          partCnt++;
        }
      }
      if(first === 'ecl' && (second === 'amb' || second === 'blu' || second === 'brn' || second === 'gry' || second === 'grn' || second === 'hzl' || second === 'oth')) {
        partCnt++;
      }
      if(first === 'pid') {
        let flag = 0;
        const tmp = second
        for(let j=0;j<tmp.length;j++) {
          if((tmp[j] >= '0' && tmp[j] <= '9')) {
            flag++;
          }
        }
        if(flag === 9) {
          partCnt++;
        }
      }
      if(first === 'cid') {
        partCnt++;
        cid++;
      }
    }
  }
  if(partCnt + (1 - cid) >= 8) {
    cnt++;
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