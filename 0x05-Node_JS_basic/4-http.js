// Create a small HTTP server using Node's HTTP module
const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});
app.listen(1245);
module.exports = app;
