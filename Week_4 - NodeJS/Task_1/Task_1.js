const urlmod = require('url');

function resolveAbsoluteURL(baseUrl, relativePath) {
  const resolvedURL = urlmod.resolve(baseUrl, relativePath);
  console.log(' URL:', resolvedURL);
}

const Url = 'https://www.googlecloud.com/default/';
const Path = '../homepage.html';
resolveAbsoluteURL(Url, Path);

// const readline = require('readline');
// const urlmod = require('url');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function parseURL(input) {
//   const parsed = new urlmod.URL(input);

//   console.log('Protocol:', parsed.protocol);
//   console.log('Host:', parsed.host);
//   console.log('Path:', parsed.pathname);
//   console.log('Query Parameters:');
//   const query = parsed.searchParams;
//   query.forEach((value, name) => {
//     console.log(`${name}:${value}`);
//   });
// }
// rl.question('Enter the URL: ', (input) => {
//   parseURL(input);
//   rl.close();
// });
