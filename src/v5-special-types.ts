//* Top types

let x : any = "Hello munim";
x = 123;
console.log(x.length);

const something : unknown = "hello dev";
// something.length;

//* Core types

let bigMan: unknown;
let bigMama: any;

const num: number = 123;
const str: string = "munim"
let nothing : void;

bigMama = str;
bigMan = num;
bigMan = nothing;


type Status = "pending" | "success";
let someStatus: string;

let status: Status = "pending";

someStatus = status;

//* Nullish types

interface User {
    name: string;
}

type LoggedInUser = User | null;

const currentUser: LoggedInUser = null;

//* Unit type

let fattyMan: unknown;

const greet = () => {
    console.log("Hello Dev");
}

fattyMan = greet();
// const greetings: string = greet(); // show error

//* Sub-type of unit type

let littleMan: unknown;

const niceGreet = (): undefined => {
    console.log("Hello boy");
    return undefined;
}

const greetings: void = niceGreet();
console.log(greetings);

//* Bottom type

// let neverRun : never = "asdasd" // show error

const getError = (msg: string): never => {
    // console.log(msg);
    throw new Error(msg);
}

const k: string = getError("This is an error");
const l: number = getError("This is an error");
const m: undefined = getError("This is an error");
const n: null = getError("This is an error");