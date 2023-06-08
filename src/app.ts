interface Person { //interface allow us to define the structure of an object, we can use it as a type check to make sure that the object follows a certain struture
    name: string; //an interface can't have an initializor, so we don't assign a value
    age: number;

    greet(phrase: string): void;
}

let user1: Person; //we use our interface as a type

user1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string){
        console.log(phrase + ' ' + this.name)
    }
};

user1.greet('Hi there - I am');