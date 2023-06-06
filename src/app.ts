class Department { //creating a new Class
    //private id: string;
    //private name: string;  //property of the class, by default is public
    private employees: string[] = []; //private means the only access is inside the Class


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

const accounting = new Department('d1','Accounting'); //creating an object with instance from the class where we pass the value for the 'name'
//added 'd1' because we added an 'id' property do the Class


//console.log(accounting) //here we have the 'accounting' object with 'name' inside with the value 'Accounting'

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

//accounting.employees[2] = 'Anna'; //we shouldn't do this, we need to always use the same approach because we are working in a team etc
//this way there will be an error since we set the property employees as private (can only be reached inside the class)



accounting.describe();
accounting.printEmployeeInformation();



