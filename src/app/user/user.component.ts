import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { using } from 'rxjs';
import User from 'src/class/User';
import { UserService } from '../service/user.service';
import Child from 'src/class/Child';
import { ChildService } from '../service/child.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnDestroy {

  userList: User = new User(null,null, null,null, null, null);
  Child:Child=new Child(null,null,null,null)
  childList:Child[]=[]
  constructor(public userService: UserService, public route: Router,public childService:ChildService) { }
  ngOnInit() {
    this.userList = this.userService.getFromStorage();
    console.log(this.userService.getFromStorage());
  }
  ngOnDestroy() {
    this.userService.saveInStorage(this.userList);
  }

  save(f)
  {

   localStorage.setItem('userId',this.userList.UserId);

    alert(localStorage.getItem('userId'));


   this.userService.RegisterUser(this.userList).subscribe((succ) => {
  // this.userService.saveInStorage(this.userList);
      alert("good");
       }
         , (err) => {
        alert("bad");
         });
    // for (let index = 0; index < this.arrChildren.length; index++) {
    // this.arrChildren[index].ParentId=this.userList.UserId
    //  }
    // for (let index = 0; index < this.arrChildren.length; index++) {
    //  this.childService.RegisterChilrren(this.arrChildren[index]).subscribe((succ) => {
    //   })
  //  }
 
  
  f.reset();
  alert("המידע נשמר בהצלחה")
 
  }
  saveName(){
    this.userService.saveInStorage(this.userList);
  }
  addChild(){
    this.Child.ParentId=(localStorage.getItem('userId'));

      this.childService.RegisterChilren(this.Child).subscribe((succ) => {
   alert("good");
    }
      , (err) => {
     alert("bad");
      });
      
    alert(this.Child.ParentId);
   this.Child=new Child(null,null,null,null);
  }
}