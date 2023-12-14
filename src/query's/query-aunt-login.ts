import { type DefaultError, useQuery } from "@tanstack/react-query";
import Authorization from "../services/authorization_services";

export function queryAuthLogin<T>(params: T): any {
    const { data, refetch } = useQuery<string | any, DefaultError, string | any, [string, T]>({
        enabled: false,
        queryKey: ["products", params],
        queryFn: async ({ queryKey: [, _params] }) => {
            return await Authorization.Login<T>(_params);
        },
    });
    return { data, refetch };
}
