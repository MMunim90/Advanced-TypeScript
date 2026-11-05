// failed
// const wrapInArray = (value: any) => {
//     return [value];
// }

// failed
// const wrapInArray = (value: string | number) => {
//     return [value];
// }

// const stringArr = wrapInArray("abc");
// const numberArr = wrapInArray(34243);
// // const booleanArr = wrapInArray(false);

// stringArr.map((item) => console.log(item.toUpperCase()));
// numberArr.map((item) => console.log(item.toUpperCase()));

// // console.log(stringArr);
// // console.log(numberArr);

//  generic type function
const wrapInArray = <T>(value: T) => {
  return [value];
};

const stringArr = wrapInArray("abc"); // implicit
const secondStringArr = wrapInArray<string>("sadfs"); // explicit
const numberArr = wrapInArray(34243);

secondStringArr.map((item) => console.log(item.toUpperCase()));


// interface without generic type

// interface UserResponse {
//     data: {
//         name: string;
//         role: string;
//     };

//     success: boolean;
//     statusCode: number;
// }

// interface BlogResponse {
//     data: {
//         title: string;
//         description: string;
//         date: string;
//     };

//     success: boolean;
//     statusCode: number;
// }


// interface with generic type

interface User {
  name: string;
  role: string;
}

interface Blog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type UserResponse = ApiResponse<User>
type BlogResponse = ApiResponse<Blog>

// const userRes : UserResponse = {
//     statusCode: 200,
//     success: true,
//     data: {
//         name: "Munim",
//         role: "Admin"
//     }
// }

// or

const userRes : ApiResponse<User> = {
    statusCode: 200,
    success: true,
    data: {
        name: "Munim",
        role: "Admin"
    }
}