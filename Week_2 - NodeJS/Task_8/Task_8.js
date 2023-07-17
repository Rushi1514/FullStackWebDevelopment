const fs = require('fs');
function createFileStructure(rootPath, structure) {
  for (let item of structure) {
    const itemPath = `${rootPath}/${item.name}`;
    if (item.type === 'file') {
      fs.writeFile(itemPath, item.content, (err) => {
        if (err) {
          console.error(`Error creating file '${itemPath}': ${err}`);
        } else {
          console.log(`File created: ${itemPath}`);
        }
      });
    } else if (item.type === 'folder') {
      fs.mkdir(itemPath, { recursive: true }, (err) => {
        if (err) {
          console.error(`Error creating folder '${itemPath}': ${err}`);
        } else {
          console.log(`Folder created: ${itemPath}`);
          if (item.children && item.children.length > 0) {
            createFileStructure(itemPath, item.children);
          }
        }
      });
    }
  }
}
const structureFilePath = 'structure.json';
const rootPath = './output';
fs.readFile(structureFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading structure file: ${err}`);
    return;
  }

  const structure = JSON.parse(data);
  createFileStructure(rootPath, structure);
});
