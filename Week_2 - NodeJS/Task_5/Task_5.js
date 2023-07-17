const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  function promptEmployeeData() {
    return new Promise((resolve, reject) => {
      rl.question('Enter Employee Name: ', (name) => {
        rl.question('Enter Employee ID: ', (id) => {
          rl.question('Enter Department: ', (department) => {
            rl.question('Enter Age: ', (age) => {
              const employee = {
                name: name,
                id: id,
                department: department,
                age: age
              };
              resolve(employee);
            });
          });
        });
      });
    });
  }
  function writeDataToFile(data) {
    fs.writeFile('employee-data.json', JSON.stringify(data), (err) => {
      rl.close();
    });
  }
  async function main() {
    const employeeData = await promptEmployeeData();
    writeDataToFile(employeeData);
  }
  main();