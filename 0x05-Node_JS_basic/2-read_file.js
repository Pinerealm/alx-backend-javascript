const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const contents = fs.readFileSync(path, 'utf8').split('\n');
    const students = contents.filter((item) => item);
    const fields = {};

    for (const i in students) {
      if (i !== 0) {
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
