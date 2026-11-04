//* "typeof"

let x = 123;
console.log(typeof x);

let y = "asdad";
console.log(typeof y);

let z = ["asdad"];
console.log(typeof z === "object");

let w = null;
console.log(typeof w);

//* Type Guard

const print = (value: string | number) => {
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    else{
        return value;
    }
}

//* Truthiness

type User = {
    name: string;
    address?: {  // "?" means optional 
        street: string;
    };
} | null;

const loggedInUser: User = {
    name: "Munim",
    address: {
        street: "ABC",
    },
};

const showAddress = (user: User) => {
    if(user && user.address){
        console.log(user.address.street)
        return;
    }

    throw new Error("User not found");
}

//* Equality



//* "in" operator



//* "instanceof" check



//* Discriminated union


