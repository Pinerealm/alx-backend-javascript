// Reading a file synchronously with Node JS
const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    lines.shift(); lines.pop();
    const fields = {};

    lines.forEach((line) => {
      if (line) {
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
