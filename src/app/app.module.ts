import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPizzaComponent } from './pizza/list-pizza.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './login/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { AdminLogoutComponent } from './logout/adminlogout.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptor } from './service/AuthInterceptor';
import { CustomerService } from './service/customer.service';
import { AddCouponComponent } from './coupons/add-coupon.component';
import { CouponListComponent } from './coupons/coupon-list.component';
import { CouponComponent } from './coupons/coupon.component';
import { EditCouponComponent } from './coupons/edit-coupon.component';
import { AdminCouponListComponent } from './admin/coupon/coupon-list1.component';

import { AddPizzaComponent } from './admin/pizza/add-pizza.component';
import { UpdatePizzaComponent } from './admin/pizza/update-pizza.component';
import { AdminPizzaListComponent } from './admin/pizza/pizza.component';
import { PizzaItemComponent } from './pizza/pizza-item.component';
import { MainPizzaComponent } from './admin/pizza/pizza-main.component';
import { PizzaByidComponent } from './admin/pizza/pizza-byid.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPizzaComponent,
    CouponListComponent,
    CouponComponent,
    AddCouponComponent,
    EditCouponComponent,
    AdminComponent,
    AdminCouponListComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminLogoutComponent,
    AddPizzaComponent,
    UpdatePizzaComponent,
    AdminPizzaListComponent,
    PizzaItemComponent,
    MainPizzaComponent,
    CartComponent,
    PizzaByidComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [
    CustomerService,
    { provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
