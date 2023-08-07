const path = require('path');
const fs = require('fs').promises;
async function exists(file) {
  try {
   await fs.access(file);
    console.log(`File "${file}" exists.`);
  } catch (error) {
    console.error(`Error: File "${file}" does not exist.`);
  }
}
const filepath = path.join(__dirname, 'Task_4_1.js');
 exists(filepath);
