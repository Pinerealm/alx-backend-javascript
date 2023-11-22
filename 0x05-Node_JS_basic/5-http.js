const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    fs.readFile(process.argv[2], 'utf8', (err, data) => {
      if (err) {
        res.end(err.message);
      } else {
        const contents = data.split('\n');
        const students = contents.filter((item) => item);
        const fields = {};

        for (const i in students) {
          if (i !== '0') {
            const student = students[i].split(',');
            if (!fields[student[3]]) {
              fields[student[3]] = [];
            }
            fields[student[3]].push(student[0]);
          }
        }

        res.write(`Number of students: ${students.length - 1}\n`);
        res.write(`Number of students in CS: ${fields.CS.length}. List: ${fields.CS.join(', ')}\n`);
        res.write(`Number of students in SWE: ${fields.SWE.length}. List: ${fields.SWE.join(', ')}\n`);
        res.end();
      }
    });
  }
});
app.listen(1245);
