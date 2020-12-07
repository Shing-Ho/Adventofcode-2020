const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf8');

const str = data.split('\n');

const obj = {};

function parseLine(line) {
  const value = line.split(' bags contain ')[0]
  const key = line.split(' bags contain ')[1].split(/( bags.)|( bag.)|( bags,)|( bag,)/)//.replace(/[0-9]/, '').trim()
  const keys = []
  key.forEach(each => {
    if(each && !each.includes('bag')) {
      if(each === 'no other') {
        keys.push({key: each, value: 0})
      } else {
        keys.push({key: each.trim().replace(/[0-9]/, '').trim(), value: each.trim().split(' ')[0]})
      }
    }
  })
  keys.forEach(each => {
    if(obj[value] && each.value) {
      obj[value].push(each)
    } else if(each.value) {
      obj[value] = [each]
    }
  })
}

let cnt = 0;
function loop(key, count) {
  if(obj[key]) {
    obj[key].forEach(each => {
      if(count !== 1) cnt += count
      // console.log(key, count, cnt)
      loop(each.key, parseInt(each.value) * count)
    })
  } else {
    cnt += count
    // console.log('--- ', key, count, cnt)
  }
}

for(let i = 0; i < str.length; i++) {
  parseLine(str[i]) 
}
console.log(obj)
loop('shiny gold', 1)
console.log(cnt)
