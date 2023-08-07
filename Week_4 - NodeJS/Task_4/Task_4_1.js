const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function pathmod(path) {
  const d = path.dirname(path);
  const b = path.basename(path);
  console.log('Directory Name:', d);
  console.log('Base Name:', b);
}

rl.question('Enter file path: ', (path) => {
pathmod(filePath);
  rl.close();
});
