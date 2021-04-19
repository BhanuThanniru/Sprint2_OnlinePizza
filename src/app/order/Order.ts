import { Cart } from "../cart/cart";
import { Coupon } from "../coupon";
import { Customer } from "../customer";
import { TransactionMode } from "./TransactionMode";

export interface Order{
     id:number;
    // type:string;
    // description:string;
    customer:Customer;
    transactionMode:TransactionMode;
    cart:Cart[];
    coupon : Coupon;
    //totalCost:number;

}