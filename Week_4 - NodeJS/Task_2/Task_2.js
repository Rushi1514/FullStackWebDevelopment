const url = require('url');
const querystring = require('querystring');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function extractQueryParameters(inputURL) {
  const parsedURL = url.parse(inputURL);
  const queryParameters = querystring.parse(parsedURL.query);
  return queryParameters;
}

rl.question('Enter the URL with a query string: ', (inputURL) => {
  const extractedParams = extractQueryParameters(inputURL);
  console.log('Extracted key-value pairs:');
  for (const key in extractedParams) {
    console.log(`  ${key}: ${extractedParams[key]}`);
  }
  rl.close();
});
