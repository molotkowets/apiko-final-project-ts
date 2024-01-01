export interface TAccount {
    fullName: string;
    email: string;
    phone: string;
    country: string | null;
    city: string | null;
    address: string | null;
}

// type TChangePass = {string}
export interface IMain {
    name: string;
    label: string;
    value: string;
    id: string;
}
export interface IInputAttributes {
    id: number | string;
    type: string;
    name: string;
    // label: string | null;
    value: string | null;
    placeholder: string | null;
}
export const genChangePass = (arr: string[]): IInputAttributes[] => {
    // console.log("pass:", arr);
    const arrData = arr.map((i, index) => {
        return {
            id: index,
            type: "password",
            name: i,
            // label: null,
            value: null,
            placeholder: i,
        };
    });
    // console.log("arrData:", arrData);
    return arrData;
};
export const genMainInf = (arr: Array<[string, string | null]>): IInputAttributes[] => {
    // console.log("main", arr);
    const arrData = arr.map((keys, index) => {
        return {
            id: "0" + index,
            type: "text",
            name: keys[0],
            // label: keys[0],
            value: keys[1],
            placeholder: null,
        };
    });

    // console.log("arrDataMain:", arrData);
    return arrData;
};
// interface ITestObj {
//     name: string;
//     age: number;
// }

// const testObj = {
//     name: "alex",
//     age: 40,
// };
// const index = "name";
// console.log(testObj[index]);
