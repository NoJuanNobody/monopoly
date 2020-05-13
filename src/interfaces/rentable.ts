export default interface rentable{
    revenue: number;
    acceptRent(rent: number): this;
    modifyRentValue(): this;
    payTo(): boolean;
}