const fs = require('fs');

module.exports = async function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
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

      console.log(`Number of students: ${students.length - 1}`);
      console.log(`Number of students in CS: ${fields.CS.length}. List: ${fields.CS.join(', ')}`);
      console.log(`Number of students in SWE: ${fields.SWE.length}. List: ${fields.SWE.join(', ')}`);
    }
  });
};
