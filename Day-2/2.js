const input = require('./1.json')

const loop = () => {
  let num = 0;
  for (let i = 0; i < input.length; i++) {
    const terms = input[i].split(':')
    const min = terms[0].split(' ')[0].split('-')[0];
    const max = terms[0].split(' ')[0].split('-')[1];
    const ch = terms[0].split(' ')[1];
    const str = terms[1].trim();

    const count = (str[min - 1] === ch ? 1 : 0) + (str[max - 1] === ch ? 1 : 0)
    if(count === 1) {
      console.log(str, min, str[min], max, str[max], ch, count)
      num++;
    }
  }
  console.log('num', num)
}

loop();