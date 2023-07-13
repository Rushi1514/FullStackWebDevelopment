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
  
  // Write employee data to file
  function writeDataToFile(data) {
    fs.writeFile('employee-data.json', JSON.stringify(data), (err) => {
      // if (err) {
      //   console.error('Error writing to file:', err);
      // } else {
      //   console.log('Employee data has been written to employee-data.json');
      // }
      rl.close();
    });
  }
  
  // Main function to prompt user and write data to file
  async function main() {
    const employeeData = await promptEmployeeData();
    writeDataToFile(employeeData);
  }
  
  // Call the main function
  main();