import { useSelector } from "react-redux";

interface IUseAuthUser {
    token: string | null;
    account: {
        id: number | null;
        fullName: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        email: string | null;
        phone: string | null;
        country: string | null;
        city: string | null;
        address: string | null;
    };
}

interface IUseAuth {
    user: IUseAuthUser;
}

export const useAuth = (): IUseAuthUser => {
    const { token, account } = useSelector<IUseAuth, IUseAuthUser>((state) => state.user);
    return {
        token,
        account,
    };
};
