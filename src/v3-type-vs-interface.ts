//* type alias vs interface

//? Interface is generally connected to objects

//? type alias is more connected to literals, unions, tuples, primitives

//TODO : type alias

//? case 1
type ID = number;
//! interface id = number

//? case 2
type Role = "Admin" | "Member";
//! interface "Admin" | "Member";

//? case 3
interface User{
    name: string;
    id: ID;
    role: Role; // we can use union inside object
}

const user: User = {
    name: "Munim",
    id: 123,
    role: "Admin",
};


//TODO : interface

interface Animal{
    species: string;
}

interface Cat extends Animal {
    breed: string;
}

const cat : Cat = {
    species: "Felix Catus",
    breed: "Persian",
}

console.log(cat.breed, cat.species)


type Vehicle = {
    brand: string;
};

type Car = Vehicle & { 
    //? "&" symbol is used to perform intersection
    model: string;
};

const car: Car = {
    model: "Corolla",
    brand: "Toyota",
}

console.log(car.brand, car.model);



//? if we create more then one interfaces with same name, then they will marge. it wont happen in type. 
interface IEmployee {
    name: string;
}

interface IEmployee {
    id: number;
}

const employee: IEmployee = {
    id: 123,
    name: "ABC",
}


//! if we create type with same name more than one time it gives an error, this is not valid

// type TEmployee = {
//     name: string;
// }

// type TEmployee = {
//     id: number;
// }