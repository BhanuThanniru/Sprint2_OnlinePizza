import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Pizza } from '../pizza/Pizza';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  
  subject = new Subject()
  constructor() { }

  sendMsg(pizza: Pizza){
   // console.log(pizza)
    this.subject.next(pizza)   //Trigerring an event
  }

  getMsg(){
    console.log(this.subject.asObservable())
    return this.subject.asObservable()
  }
}
