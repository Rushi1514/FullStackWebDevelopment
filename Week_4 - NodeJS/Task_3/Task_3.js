const path = require('path');
 function arePathsSame(file1Path, file2Path) {
  try {
    const file1Stats = path.resolve(file1Path);
    const file2Stats = path.resolve(file2Path);
    return file1Stats === file2Stats;
  } catch (error) {
    return false;
  }
}

// const file1Path = 'D:\Clg 3nd Year\5th SEMESTER BTech IT 21IT145\FSWD\Week_4';
// const file2Path = 'D:\Clg 3nd Year\5th SEMESTER BTech IT 21IT145\FSWD\Week_4\Task_3';
const areSame =  arePathsSame(file1Path, file2Path);
console.log(`Paths refer to the same file: ${areSame}`);