// Students Controller
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((fields) => {
        const resStringArray = ['This is the list of our students'];

        for (const field in fields) {
          if (field) {
            const list = fields[field];
            const countStudents = list.length;
            resStringArray.push(`Number of students in ${field}: ${countStudents}. List: ${list.join(', ')}`);
          }
        }
        res.status(200).send(resStringArray.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((fields) => {
          const list = fields[major];
          res.status(200).send(`List: ${list.join(', ')}`);
        })
        .catch(() => {
          res.status(500).send('Cannot load the database');
        });
    }
  }
}
