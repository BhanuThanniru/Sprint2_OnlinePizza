import { Component, OnInit, Output } from '@angular/core';
import { Cart } from '../cart/cart';
import { Coupon } from '../coupons/Coupon';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cart:Array<Cart> | null | string | undefined
  cart1!:Array<Cart>
  cart2!:Array<any>
  cart3!:any
  customerId!:string
  coupon!:Coupon
  constructor() { }

  ngOnInit(): void {

    // this.cart= <Cart><unknown>(JSON.parse(localStorage.getItem('cartItems')))
    // this.cart1 = <Cart><unknown>(this.cart)
    // console.log(this.cart1);
    // for(let c of this.cart1){
    //  this.cart2.push(Object(c).pizzaId,c.pizzaSize, c.quantity)
     
    // }

    // let jsonObject: any = JSON.parse(cart);
    // this.cart3 = <Cart>jsonObject;
    // console.log(this.cart3)
    console.log("cart2 is" +this.cart2)
    this.cart2 = this.cart1;
    //console.log("cart 2 is: " +this.cart2)
    this.customerId = String(sessionStorage.getItem('email'))
    console.log(this.customerId)

  }

}
