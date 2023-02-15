import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  userName=" ";
  sub:Subscription;
  constructor(public userSer:UserService){}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub=this.userSer.currentUser.subscribe(succ=>{
      console.log(this.userName);
      this.userName=succ.name?succ.name:"a"
    })
  }
}
