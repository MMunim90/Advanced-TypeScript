// const greeting = () => {
//     console.log("Hello Munim")
// }

// greeting()



// Literal Type

type Status = "pending"
const status : Status = "pending"
console.log(status)

// Basic Union

type Identity = string | number
const id : Identity = "2423432"
console.log(id)

// Literal Union

type Role = "user" | "admin" | "manager"
const userRole : Role = "admin"
console.log(userRole)

// Object Union

type Admin = {id: number, role: "admin", privileges: string[]}
type Member = {id: number, role: "member", plan: string[]}

type User = Admin | Member
const user : User = {id: 123, role: "member", plan: ["abc", "fed", "msr"]}
console.log(user);