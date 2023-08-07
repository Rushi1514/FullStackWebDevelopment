const path = require('path');
const readline = require('readline');
const fs = require('fs').promises;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function extractFileExtension(filePath) {
  return path.extname(filePath);
}

rl.question('Enter the file path: ',  (file1Path) => {
    const extension = extractFileExtension(file1Path);
    console.log(`File extension: ${extension}`);
    rl.close();
  });
