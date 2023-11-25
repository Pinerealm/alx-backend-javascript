// Utility function
import fs from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      if (data) {
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
        resolve(fields);
      }
    });
  });
}
