// Create a more complex HTTP server using Node's HTTP module
const http = require('http');
const fs = require('fs');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    fs.readFile(database, 'utf8', (error, data) => {
      if (error) {
        res.end('Cannot load the database');
      } else {
        let lines = data.split('\n');
        lines = lines.filter((line) => line.length > 0);
        lines.shift();
        const fields = {};

        lines.forEach((line) => {
          const student = line.split(',');
          if (!fields[student[3]]) {
            fields[student[3]] = [];
          }
          fields[student[3]].push(student[0]);
        });

        const count = lines.length;
        res.write(`Number of students: ${count}\n`);
        const tempStringList = [];
        for (const field in fields) {
          if (field) {
            const list = fields[field];
            const countStudents = list.length;
            tempStringList.push(`Number of students in ${field}: ${countStudents}. List: ${list.join(', ')}`);
          }
        }
        res.end(tempStringList.join('\n'));
      }
    });
  }
});

app.listen(1245);
module.exports = app;
