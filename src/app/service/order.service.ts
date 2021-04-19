import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../order/Order";

@Injectable({
    providedIn:'root',
})

export class OrderService{

    backendUrl:string='http://localhost:8080/onlinepizza/'
    constructor(private http:HttpClient){}


    bookOrder(order : Order):Observable<Order>{
        return this.http.post<Order>(this.backendUrl+'orders',order);
    }
}
