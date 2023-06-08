//////////////Interfaces as Function Types///////////////////////////////
//type AddFn = (a: number, b: number) => number; //custom function type
interface AddFn{
    (a: number, b: number): number //anonymous function on a interface
}

let add: AddFn

add = (n1: number, n2: number) => {
    return n1 + n2;
}
///////////////////////////////////////////////////////////////////////////



interface Named {
    readonly name?: string; //an interface can't have an initializor, so we don't assign a value
    outputName?: string; //properties or methods with "?"" they are marked as optional
}


//interfaces are not reconized by JS only in TS
interface Greetable extends Named{ //interface allow us to define the structure of an object, we can use it as a type check to make sure that the object follows a certain struture
    //if we inherit an interface, for example, this Greetable has the name property from Named interface
    greet(phrase: string): void;
}

class Person implements Greetable{ //this means that this class has a contract, which means, they have to follow certain "rules". We can implement as many interfaces as we want.
    name?: string; //optional property in a class
    age = 30;

    constructor(n?: string){ //optional parameter
        if(n){
            this.name = n;

        }
    }

    greet(phrase: string){
        if(this.name){
            console.log(phrase + ' ' + this.name)
        }else{
            console.log('Hi!')
        }
    }
}

let user1: Greetable; //we use our interface as a type

user1 = new Person()
//user1.name = 'Manu' //gives error because is readonly property

user1.greet('Hi there - I am');