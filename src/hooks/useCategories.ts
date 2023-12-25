import { useSelector } from "react-redux";

interface IUseCategory {
    id: number;
    name: string;
}

interface IUseAuth {
    categories: { categories: IUseCategory[] };
}
interface IUseAuthTest {
    categories: IUseCategory[];
}

export const useCategories = (): IUseAuthTest => {
    const categories = useSelector<IUseAuth, IUseAuthTest>((state) => state.categories);
    return categories;
};
