class Department { //creating a new Class
    //private id: string;
    //private name: string;  //property of the class, by default is public
    //private employees: string[] = []; //private means the only access is inside the Class
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string){ //constructor is reserved keyword, but works like a function
        //this.name = n; //here we give the value "n" to the property name, so objects created with this class, will have the property 'name' with the value we gave
        //we also have the 'readonly' modifier which means that the value of that property cannot change, for example, the 'id'
    }   

    describe() { //this is a method or constructor functions
        console.log(`Department (${this.id}): ${this.name}`) //we have to use 'this' to refer to the class property
    }

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

}

class AccountingDepartment extends Department{
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
       
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
    }

    printReports(){
        console.log(this.reports)
    }

}

const it = new ITDepartment('d1', ['Max']); //creating an object with instance from the class where we pass the value for the 'name'
//added 'd1' because we added an 'id' property do the Class


//console.log(accounting) //here we have the 'accounting' object with 'name' inside with the value 'Accounting'

it.addEmployee('Max');
it.addEmployee('Manu');

//accounting.employees[2] = 'Anna'; //we shouldn't do this, we need to always use the same approach because we are working in a team etc
//this way there will be an error since we set the property employees as private (can only be reached inside the class)



it.describe();
it.printEmployeeInformation();

const accounting = new AccountingDepartment('d2', [])

accounting.addReport('Something went wrong...')

accounting.printReports()

console.log(it)
console.log(accounting)

accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.printEmployeeInformation()




