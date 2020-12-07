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
      keys.push(each.replace(/[0-9]/, '').trim())
    }
  })
  keys.forEach(each => {
    if(obj[each]) {
      obj[each].push(value)
    } else {
      obj[each] = [value]
    }
  })
}

let cnt = 0;
const flag = {}
function loop(key) {
  if(obj[key] && obj[key].length) {
    obj[key].forEach(each => {
      if(!flag[each]) {
        cnt++;
        flag[each] = true
        loop(each)
      }
    })
  }
}

for(let i = 0; i < str.length; i++) {
  parseLine(str[i]) 
}
loop('shiny gold')
console.log(cnt)
