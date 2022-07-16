import { Api } from "../components/Map.model";
export declare const createHeaders: (token: string) => {
    "Api-Key": string;
};
export declare const createApi: (token: string) => Api;
