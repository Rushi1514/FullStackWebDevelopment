const fs = require('fs');
const path = require('path');
fs.writeFile('file.txt', 'Hello, World!', (err) => {
  if (err) {
    console.error(`Error creating file: ${err}`);
  } else {
    console.log('File created successfully.');
    fs.readFile('file.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err}`);
      } else {
        console.log(`File content: ${data}`);
        fs.appendFile('file.txt', '\nAppended text', (err) => {
          if (err) {
            console.error(`Error appending to file: ${err}`);
          } else {
            console.log('Text appended successfully.');
            fs.unlink('file.txt', (err) => {
              if (err) {
                console.error(`Error deleting file: ${err}`);
              } else {
                console.log('File deleted successfully.');
              }
            });
          }
        });
      }
    });
  }
});
fs.rename('oldfile.txt', 'newfile.txt', (err) => {
  if (err) {
    console.error(`Error renaming file: ${err}`);
  } else {
    console.log('File renamed successfully.');
  }
});
fs.readdir('.', (err, files) => {
  if (err) {
    console.error(`Error listing files/directories: ${err}`);
  } else {
    console.log('Files and directories in current directory:');
    files.forEach((file) => {
      const filePath = path.join('.', file);
      const stats = fs.statSync(filePath);
      const isDirectory = stats.isDirectory() ? '(Directory)' : '';
      console.log(`- ${file} ${isDirectory}`);
    });
  }
});
