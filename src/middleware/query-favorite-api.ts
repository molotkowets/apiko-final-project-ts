import { type DefaultError, useQuery } from "@tanstack/react-query";
import { type TToken } from "./middle.selection-request ";
import apiFavorite from "../services/apiFavorite";

export const queryByIdToFavorite = (id: string, token: TToken): any => {
    const { data, refetch } = useQuery<
        string | any,
        DefaultError,
        string | any,
        [string, string, TToken]
    >({
        enabled: false,
        queryKey: ["products", id, token],
        queryFn: async ({ queryKey: [, _id, _token] }) => {
            return await apiFavorite.byIdToFavorite(_id, _token);
        },
    });
    return { data, refetch };
};
