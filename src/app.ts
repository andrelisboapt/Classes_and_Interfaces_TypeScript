class Department { //creating a new Class
    name: string;  //property of the class

    constructor(n: string){ //constructor is reserved keyword, but works like a function
        this.name = n; //here we give the value "n" to the property name, so objects created with this class, will have the property 'name' with the value we gave
    }

}

const accounting = new Department('Accounting'); //creating an object with instance from the class where we pass the value for the 'name'

console.log(accounting) //here we have the 'accounting' object with 'name' inside with the value 'Accounting'