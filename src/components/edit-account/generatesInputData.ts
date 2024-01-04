export interface TAccount {
    fullName: string;
    email: string;
    phone: string;
    country: string | null;
    city: string | null;
    address: string | null;
}
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
    value: string | null;
    placeholder: string | null;
}
export const genChangePass = (arr: string[]): IInputAttributes[] => {
    const arrData = arr.map((i, index) => {
        return {
            id: index,
            type: "password",
            name: i,
            value: null,
            placeholder: i,
        };
    });
    return arrData;
};
export const genMainInf = (arr: Array<[string, string | null]>): IInputAttributes[] => {
    const arrData = arr.map((keys, index) => {
        return {
            id: "0" + index,
            type: "text",
            name: keys[0],
            value: keys[1],
            placeholder: null,
        };
    });
    return arrData;
};
