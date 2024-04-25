const fs = require('fs');

const finalNumber = 99999;

const timeStart = Date.now();
let sumIDoubled = 0;
for (let i = 0; i < finalNumber; i++) {
  sumIDoubled += i**2;
  console.log(sumIDoubled);
}
const timeEnd = Date.now();
const text = `\nusingConsole - sumIDoubled: ${sumIDoubled}\nusingConsole - Time taken: ${timeEnd - timeStart} ms\n`;

fs.appendFileSync('result.txt', text)