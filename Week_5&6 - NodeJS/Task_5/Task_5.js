const os = require('os');
const envVariables = process.env;
console.log('Environment Variables will be displayed from here : ');
Object.keys(envVariables).forEach((key) => {
  console.log(`${key}: ${envVariables[key]}`);
});
