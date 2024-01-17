export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter(
    (student) => student.location === city
  );
  return studentsByCity.map((student) => {
    const studentGrade = newGrades.filter(
      (grade) => grade.studentId === student.id
    )[0];
    if (studentGrade) {
      return { ...student, grade: studentGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
