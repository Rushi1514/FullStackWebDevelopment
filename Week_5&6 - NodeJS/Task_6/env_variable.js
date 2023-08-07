function getEnvironmentVariable(variableName) {
    if (process.env.hasOwnProperty(variableName)) {
      return process.env[variableName];
    } else {
      return null;
    }
  }
  module.exports = getEnvironmentVariable;