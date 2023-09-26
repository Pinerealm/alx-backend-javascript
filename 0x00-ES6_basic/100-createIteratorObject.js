export default function createIteratorObject(report) {
  const employeesList = Object.values(report.allEmployees).flat();
  let index = 0;
  return {
    next() {
      if (index < employeesList.length) {
        const value = employeesList[index];
        index += 1;
        return { value, done: false };
      }
      return { value: null, done: true };
    },
    [Symbol.iterator]() { return this; },
  };
}
