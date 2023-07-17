var http = require("http");
var server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("<h1>This is POST Method</h1>");
  } else if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1>This is Get Method</h1>");
  } else if (req.method === 'DELETE') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("<h1>This is Delete Method</h1>");
  } else if (req.method === 'PUT') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end("<h1>This is Put Method</h1>");
  } else if (req.method === 'PATCH') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("<h1>This is Patch Method</h1>");
  } else if (req.method === 'HEAD') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("<h1>This is Head Method</h1>");
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("<h1>This is Options Method</h1>");
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end("Invalid Method.");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});