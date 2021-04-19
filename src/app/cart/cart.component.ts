import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../pizza/Pizza';
import { CartService } from '../service/cart.service';
import { Cart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  // pizzaList!:Pizza[]
 
  cartItems : Cart[] =[];
  pizzaId!:number;
  constructor(private service : CartService, private router:Router) {}
  ngOnInit(): void {
    this.cartItems = this.service.getCartItems()
}

  placeOrder(){

    this.router.navigate(['/orders'])
  }
}
