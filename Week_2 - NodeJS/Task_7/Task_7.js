  const fs = require('fs');

function createFileBackup(filePath, backupFilePath) {
  fs.copyFile(filePath, backupFilePath, (err) => {
    if (err) {
      console.error(`Error creating file backup: ${err}`);
    } else {
      console.log(`File backup created: ${backupFilePath}`);
    }
  });
}

function restoreFileBackup(backupFilePath, filePath) {
  fs.copyFile(backupFilePath, filePath, (err) => {
    if (err) {
      console.error(`Error restoring file backup: ${err}`);
    } else {
      console.log(`File backup restored: ${filePath}`);
    }
  });
}

function promptUser() {
  if (process.argv[2] === 'create') {
    const filePath = process.argv[3];
    const backupFilePath = process.argv[4];
    createFileBackup(filePath, backupFilePath);
  } else if (process.argv[2] === 'restore') {
    const backupFilePath = process.argv[3];
    const filePath = process.argv[4];
    restoreFileBackup(backupFilePath, filePath);
  } else {
    console.log('Invalid choice. Exiting...');
  }
}

promptUser();
