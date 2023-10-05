// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Define an array of students
const studentsList: Student[] = [
    { firstName: 'Taiwo', lastName: 'Ogunyinka', age: 25, location: 'Lagos' },
    { firstName: 'Tobi', lastName: 'Tosin', age: 26, location: 'Lagos' }
];

// Create a table element and add a header row
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = thead.insertRow();
headerRow.innerHTML = '<th>First Name</th><th>Location</th>';

// Add a row for each student in the array
const tbody: HTMLTableSectionElement = table.createTBody();
studentsList.forEach(student => {
    const row: HTMLTableRowElement = tbody.insertRow();
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
});

// Add the table to the document
document.body.appendChild(table);
