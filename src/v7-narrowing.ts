//* "typeof"

let x = 123;
console.log(typeof x);

let y = "asdad";
console.log(typeof y);

// array, null, object all are objects
let z = ["asdad"];
console.log(typeof z === "object");

let w = null;
console.log(typeof w);

//* Type Guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

//* Truthiness

type User = {
  name: string;
  address?: {
    // "?" means optional
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
  if (user && user.address) {
    console.log(user.address.street);
    return;
  }

  throw new Error("User not found");
};

//* some caveat of Type Guard

const printAll = (x: string | string[] | null) => {
  if (x && typeof x === "object") {
    for (let str of x) {
      console.log(str);
    }
  } else if (typeof x === "string") {
    console.log(x);
  } else {
    console.log("Opps! nothing here.");
  }
};

printAll(null)

//* Equality

const compare = (x: number | string, y: number | boolean) => {
  if (x === y) {
    console.log(x, y);
  }
};

const anotherPrintAll = (x: string | string[] | null) => {
  if (x !== null) {
    if (typeof x === "object") {
      for (let str of x) {
        console.log(str);
      }

      return;
    }
    console.log(x);
    return;
  }
  console.log("Opps! nothing here");
};

anotherPrintAll("munim");
anotherPrintAll(null);
anotherPrintAll(["amin", "mahim", "munim", "karim", "rahim"]);

//* "in" operator

type Bird = {fly: () => void};
type Fish = {swim: () => void};

const move = (animal: Bird | Fish) => {
  if("fly" in animal){
    animal.fly();
    return;
  }

  animal.swim();
}

//* "instanceof" check

const date = new Date();
const err = new Error("Something went wrong");

console.log(date instanceof Date);
console.log(date instanceof Error);
console.log(err instanceof Error);

const showDate = (x: Date | string) => {
  if(x instanceof Date){
    console.log(x.toISOString());
    return;
  }

  const date = new Date(x);
  console.log(date.toISOString());
}

showDate(new Date("12-16-1971"));
showDate("12-16-1971");

//* Discriminated union

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square { 
  kind: "square";
  sideLength: number;
}

const getArea = (shape: Circle | Square) => {
  if(shape.kind === "circle"){
    console.log(shape.radius);
  } else {
    console.log(shape.sideLength);
  }
}
