// Task 1: Define a basic Interface
interface IStudent {
    studentId: number;
    fullName: string;
}

// Task 2: Extend the Interface
interface IUniStudent extends IStudent {
    isEnrolled?: boolean;
    readonly university: string;
    // Task 3: Function Type in Interface for Simple Calculation
    getYearsStudied(enrollmentYear: number): number;
}

// Task 4: Create an object using the extended Interface
const uniStudent: IUniStudent = {
    studentId: 200,
    fullName: 'George McLane',
    isEnrolled: true,
    university: 'Derby',
    getYearsStudied(enrollmentYear) {
        return (new Date().getFullYear() - enrollmentYear);
    }
};

// Task 5: Invoke the Interface Function
console.log(uniStudent.getYearsStudied(2020));