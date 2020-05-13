// land, hotels, buisnesses
export default interface liscenceable<T, K>{
    name: string;
    description: string;
    id: number;
    owner: string
    BUYFROM(valuePaid: T[], name: string): K;
    SELLTO(asset: K): T[];
}