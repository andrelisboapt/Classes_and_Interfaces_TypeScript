abstract class Department { //creating a new Class, abstract class to use abstract methods
    static fiscalYear = 2020
    //private id: string;
    //private name: string;  //property of the class, by default is public
    //private employees: string[] = []; //private means the only access is inside the Class
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string){ //constructor is reserved keyword, but works like a function
        //this.name = n; //here we give the value "n" to the property name, so objects created with this class, will have the property 'name' with the value we gave
        //we also have the 'readonly' modifier which means that the value of that property cannot change, for example, the 'id'
    }   

    static createEmployee(name: string){ //static method is used to not depend on a instance
        return {name: name}
    }

    /* describe() { //this is a method or constructor functions
        console.log(`Department (${this.id}): ${this.name}`) //we have to use 'this' to refer to the class property
    } */

    abstract describe(this: Department): void; //this method is abstract so it needs to be implemented in every inherit class

    addEmployee(employee: string){
        this.employees.push(employee) //will pass a new employee string to our array 'employees'
    }

    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department { //inherit from Department, which means that everything including the constructor is now part of ITDepartment
    admins: string[]
    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }

    describe(){
        console.log('IT Department - ID: ' + this.id)
    }
}

class AccountingDepartment extends Department{
    private lastReport: string;
    private static instance: AccountingDepartment;

    //we use getters and setters for private atributes, just keep in mind that public atributes are very restrict in adiciona logics
    get mostRecentReport() { //this is the getter, we use this method to get the value of a private atribute from a class
        if(this.lastReport){
            return this.lastReport
            
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string){ //this is the setter, we use this method to give a value to a private atribute form a class
        if (!value){
            throw new Error('Please pass in a valid value!')
        }
        
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
       this.lastReport = reports[0]
    }

    static getInstance(){ //this way we can only have 1 instance
        if(AccountingDepartment.instance){
            return this.instance
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance
    }

    describe(){
        console.log('Accounting Department - ID: ' + this.id)
    }

    addEmployee(name: string){ //this method overrides the one from the main class
        if (name === 'Max'){
            return;
        }
        this.employees.push(name) //we can't reach employees if its private, because it's restricted to the main class
        //if we use the "protected" modifier, it will be available to the inherit classes
    }

    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text
    }

    printReports(){
        console.log(this.reports)
    }

}

const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Max']); //creating an object with instance from the class where we pass the value for the 'name'
//added 'd1' because we added an 'id' property do the Class


//console.log(accounting) //here we have the 'accounting' object with 'name' inside with the value 'Accounting'

it.addEmployee('Max');
it.addEmployee('Manu');

//accounting.employees[2] = 'Anna'; //we shouldn't do this, we need to always use the same approach because we are working in a team etc
//this way there will be an error since we set the property employees as private (can only be reached inside the class)



it.describe();
it.printEmployeeInformation();

//const accounting = new AccountingDepartment('d2', [])
const accounting = AccountingDepartment.getInstance();
const accounting1 = AccountingDepartment.getInstance();

console.log(accounting, accounting1) //they are exactly the same since we can't create another instance

accounting.mostRecentReport = "s" //this will trigger the method
accounting.addReport('Something went wrong...')
console.log(accounting.mostRecentReport) //we access the getter as a property

accounting.printReports()

console.log(it)
console.log(accounting)

accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.printEmployeeInformation()

accounting.describe()




