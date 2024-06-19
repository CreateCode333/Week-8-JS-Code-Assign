//Week 8 JS 5 Menu App Instructions:
//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.
//
// For this assignment,  my first class is called Student. I created a constructor
// with the name and major. 
class Student {
    constructor(name, major) {
    this.name = name;
    this.major = major;
    }
    //I used the following method to describe the student, and used "return" to return a string that describes the student

    describe() {
    
    return `${this.name} is in ${this.major} major`;
    }

    }
//Here I defined the Dept class
    class Dept {
    constructor(name) {
    this.name = name;
    this.students = [];
    }
    //Below I used a method to add a student to the department
    addStudent(student) {
        //the code below checks if the argument is an instance of Student
    if (student instanceof Student) {
    this.students.push(student); //Here we add a student to the array
    } else {
        //below we throw an error if the argument is not a student instance
    throw new Error(`You can only add an instance of Student. Argument is not a student: ${student}`);
    }
    }
    //Below we use this method to describe the department
    describe() {
        //// We Return a string describing the department and the number of students
    return `${this.name} has ${this.students.length} students.`;
    }

    }
//Here is where I define the Menu class which drives the application and manages the departments
    class Menu { // It is what drives the application and our choices
    constructor() {
    this.depts = []; //This array stores departments
    this.selectedDept = null; // This is a variable to manage one department at a time
    }
    //this is the entry point to the application
    start() { 
    let selection = this.showMainMenuOptions(); //Shows main menu options
   //Here I loop until the user selects to exit (0)
    while (selection != '0') {
    switch (selection) {
        //Below are the different options the user can choose from
    case '1':
    this.createDept();
    break;
    case '2':
    this.viewDept();
    break;
    case '3' :
    this.deleteDept();
    break;
    case '4' :
    this.displayDepts();
    break;
    default:
    selection = '0' ////this is where the code exits if an invalid option is provided
    break;;
    }
    selection = this.showMainMenuOptions();  // Show main menu options again
    }
    alert('Goodbye!'); //This is an alert message when we exit the application
    }
    
    //Here is the method to show main menu options and get user input
    showMainMenuOptions() { //We see the main menu options again
    return prompt(`
    0) exit
    1) create a new department
    2) view department
    3) delete a department
    4) display all department
    `);
    }
    
    // Method to show department menu options and get user input
    showDeptMenuOptions(deptInfo) {
    return prompt(`
    0) back
    1) add a new student
    2) delete a student
    -----------------
    ${deptInfo}
    `);
    }
    // Method to display all departments
    displayDepts() {
    let deptString = '';
    for (let i = 0; i < this.depts.length; i++) {
    deptString += i+ ') ' + this.depts[i].name + '\n';
    }
    alert(deptString);
    }
    // Method to create a new department
    createDept() {
    let name = prompt('Enter name for new department: ');
    this.depts.push(new Dept(name));
    }
    // Method to view a selected department
    viewDept() {
    let index = prompt("Enter the index of the department that you want to view:");
    if (index >= 0 && index < this.depts.length) {
    this.selectedDept = this.depts[index]; //We set the selected Department here.
    let description = 'Dept Name: ' + this.selectedDept.name + '\n';
    description += ' ' + this.selectedDept.describe() + '\n ';
    // Loop through the students in the selected department and display their info
    for (let i = 0; i < this.selectedDept.students.length; i++) {
    description += i + ') ' + this.selectedDept.students[i].describe() + '\n';
    }
    // Show department menu options
    let selection1 = this.showDeptMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createStudent();
        break;
    case '2' :
    this.deleteStudent();
        break;
    default:
        break;
    }

    } 
    
}
    // Here is a Method to delete a department
    deleteDept() {
    let index = prompt('Enter the index of the department that you wish to delete: ');
    if (index >= 0 && index < this.depts.length) {
    this.depts.splice(index,1); // This removes the department from the array
    } else {
        alert('Invalid department index.') // Alerts if the index is out of range
    }
    }

    //Here is a Method to create a student    
    createStudent() {
    let name = prompt('Enter name for new student: ');
    let major = prompt('Enter major for new student: ');
 
    this.selectedDept.addStudent(new Student(name, major));
    }
    //Here is a method to delete a student
    deleteStudent() {
    let index = prompt('Enter the index of the student that you wish to delete: ');
    if (index >= 0 && index < this.selectedDept.students.length) { 
        this.selectedDept.students.splice(index,1);
    } else {
        alert('Invalid student index.')
    }
    }
    } 
    //I created a new object instance of 
    //a class named Menu and assigned it to the variable menu
    let menu = new Menu();
    //Here I called a method named start() on the object referenced by menu. 
    //This assumes that Menu class has a start method defined. This line of code 
    //executes whatever functionality is defined within the start() method of the Menu class.
    menu.start();
    