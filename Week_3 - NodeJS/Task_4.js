const fs = require('fs');
fs.readFile('rushi.txt', 'utf-8', (err, inputD) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  let lines = inputD.split('\n');
  for (let i = 0; i < lines.length; i++) {
    let x = lines[i];
      let text = x.split(',');
      let name = text[0];
      let cgpa = parseFloat(text[1]);
      if(name.includes('MA') && cgpa>7){
            console.log(name);
      }
  }
});
