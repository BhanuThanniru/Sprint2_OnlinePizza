import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminCouponListComponent } from './admin/coupon/coupon-list1.component';
import { AddPizzaComponent } from './admin/pizza/add-pizza.component';
import { PizzaByidComponent } from './admin/pizza/pizza-byid.component';
import { AdminPizzaListComponent } from './admin/pizza/pizza.component';
import { UpdatePizzaComponent } from './admin/pizza/update-pizza.component';
import { CartComponent } from './cart/cart.component';
import { AddCouponComponent } from './coupons/add-coupon.component';
import { CouponListComponent } from './coupons/coupon-list.component';
import { CouponComponent } from './coupons/coupon.component';
import { EditCouponComponent } from './coupons/edit-coupon.component';
import { AdminLoginComponent } from './login/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { AdminLogoutComponent } from './logout/adminlogout.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { ListPizzaComponent } from './pizza/list-pizza.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthGuardService1 } from './service/auth-guard1.service';
import { CartService } from './service/cart.service';


const routes: Routes = [
  { path:'pizzas', component:ListPizzaComponent},
  { path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'logout',component:LogoutComponent,canActivate:[AuthGuardService]},
  { path:'admin',component:AdminComponent,canActivate:[AuthGuardService1]},
  { path:'admin/login',component:AdminLoginComponent},
  { path:'admin/logout',component:AdminLogoutComponent,canActivate:[AuthGuardService1]},
  { path:'coupans',component:CouponListComponent,canActivate:[AuthGuardService]},
  { path:'coupans/:id',component:CouponComponent},
  { path:'admin/edit-coupan/:id',component:EditCouponComponent},
  { path:'add-coupan',component:AddCouponComponent},
  { path:'admin/pizzas',component:AdminPizzaListComponent},
  //{path:'coupans',component:CoupanListComponent},
  { path:'admin/coupans/:id',component:AdminComponent},
  //{path:'edit-coupan/:id',component:EditCoupanComponent},
  //{path:'admin',component:AdminComponent},
  { path:'admin/coupan',component:AdminCouponListComponent},
  { path: 'admin/add-pizza',component:AddPizzaComponent},
  { path: 'admin/edit-pizza/:id',component:UpdatePizzaComponent},
  { path : 'pizzas/:id',component: PizzaByidComponent},
  { path : 'orders', component: OrderComponent},
  { path : 'cart', component : CartComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
