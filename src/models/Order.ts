import CartProduct from "./CartProduct";

export default interface Order {
    id:number;
    customer: {
        name:string
        address:number
        county:string
    };
    product: CartProduct [];
}