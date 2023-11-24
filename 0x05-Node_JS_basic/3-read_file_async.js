// Reading a file asynchronously with Node JS
const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
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
        console.log(`Number of students: ${count}`);
        for (const field in fields) {
          if (field) {
            const list = fields[field];
            const countStudents = list.length;
            console.log(`Number of students in ${field}: ${countStudents}. List: ${list.join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
};
