import axios from 'axios';

interface IGetProduct {
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

type GetProductResponse = {
    data: IGetProduct;
};

type TParams = {
    offset: number;
    limit: number;
    sortBy: string
}

export async function getProduct(parameters: TParams) {
    try {
        const { data, status } = await axios.get<GetProductResponse>(
        'https://demo-api.apiko.academy/api/products',
        {
            headers: {
                Accept: 'application/json',
            },
            params: {
                ...parameters
            }
        },
    );
    console.log('response status is: ', status);
    return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}