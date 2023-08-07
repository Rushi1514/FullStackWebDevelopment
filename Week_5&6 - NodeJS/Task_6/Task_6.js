const getEnvironmentVariable = require('./env_variable');
const variableName = 'PATH';
const value = getEnvironmentVariable(variableName);
if (value !== null) {
  console.log(`${variableName}: ${value}`);
}
else {
  console.log(`Environment variable "${variableName}" not found.`);
}