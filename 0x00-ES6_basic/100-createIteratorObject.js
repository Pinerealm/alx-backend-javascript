export default function* createIteratorObject(report) {
  const employeesList = Object.values(report.allEmployees).flat();
  for (let i = 0; i < employeesList.length; i += 1) {
    yield employeesList[i];
  }
}
