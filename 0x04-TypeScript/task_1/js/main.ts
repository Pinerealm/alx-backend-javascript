// Define the teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Define the director interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string) {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Define the class StudentClass
class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}

// Define the StudentConstructor interface
interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

// Define the StudentClass interface
interface StudentClassInterface extends StudentClass {
    displayName(): string;
    workOnHomework(): string;
}
