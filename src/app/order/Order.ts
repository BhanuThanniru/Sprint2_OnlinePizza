import { Cart } from "../cart/cart";
import { Coupon } from "../coupon";
import { Customer } from "../customer";

export interface Order{
    // id:number;
    // type:string;
    // description:string;
    customer:Customer;
    transactionMode:string;
    cart:Cart[];
    coupan : Coupon;
    //totalCost:number;

}