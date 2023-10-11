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
