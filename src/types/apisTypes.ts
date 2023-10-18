export interface IGetProduct {
    id: number;
    title: string;
    price: number;
    picture: string;
    description: string | null;
    category: {
        id: number;
        name: string;
    };
    favorite: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface TAuthResponse {
    token: string;
    account: {
        id: number;
        fullName: string;
        createdAt: string;
        updatedAt: string;
        email: string;
        phone: string;
        country: string | null;
        city: string | null;
        address: string | null;
    };
}
