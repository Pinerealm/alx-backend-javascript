// Define the DirectorInterface interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define the TeacherInterface interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Define the class Director
class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

// Define the class Teacher
class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

// Define the function createEmployee
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
