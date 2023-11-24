// Create a more complex HTTP server using Express
const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      const errMessage = 'Cannot load the database';
      res.send(`This is the list of our students\n${errMessage}`);
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
      const resStringArray = ['This is the list of our students'];
      resStringArray.push(`Number of students: ${count}`);
      for (const field in fields) {
        if (field) {
          const list = fields[field];
          const countStudents = list.length;
          resStringArray.push(`Number of students in ${field}: ${countStudents}. List: ${list.join(', ')}`);
        }
      }
      res.send(resStringArray.join('\n'));
    }
  });
});

app.listen(port);
module.exports = app;
