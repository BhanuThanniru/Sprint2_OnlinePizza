import { Component, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../cart/cart';
import { Coupon } from '../coupons/Coupon';
import { Customer } from '../customer/Customer'
import { CartService } from '../service/cart.service';
import { CustomerService } from '../service/customer.service';
import { OrderService } from '../service/order.service';
import { Order } from './Order';
import { TransactionMode } from './TransactionMode';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cartItems :Cart[]=[]
  cart1!:Array<any>
  customerEmail!:any
  coupon!:Coupon
  transactionMode!:TransactionMode
  customerId !: number
  constructor(private service : CartService, private orderService : OrderService, private customerService : CustomerService,private router: Router) { }

  customer!:Customer
  
 
  
  ngOnInit(): void {
    this.customerEmail = sessionStorage.getItem('email')
    console.log("retreiving customer details")
    console.log(this.customerEmail)
    this.customerService.getCustomerByMail(this.customerEmail).subscribe(
      (data) => {
        console.log(data)
        this.customerId=data.id;
        this.customer = data;
        //console.log("data in order " +this.customerId)
      },
      (err) => console.log(err)
    )
   
    this.cartItems = this.service.getCartItems()

    console.log("in order component ")
    console.log(this.cartItems)
    for(let cart of this.cartItems){
    console.log(cart.pizzaId)
    }
    console.log("cart is displayed")

    
    
  }
  onSubmit(){
    let order : Order={
      id:0,
      customer : this.customer,
      transactionMode : this.transactionMode,
      cart : this.cartItems,
      coupon : this.coupon
    }
    console.log(this.transactionMode)
    console.log(order)

    this.orderService.bookOrder(order).subscribe(
      (data) => {
        console.log(data)
      }
    )
   
  }

}
