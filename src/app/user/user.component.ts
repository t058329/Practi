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
  childList:Child=new Child(null,null,null,null)
  constructor(public userService: UserService, public route: Router,public childService:ChildService) { }
  ngOnInit() {
    this.userList = this.userService.getFromStorage();
    // console.log(this.userService.getFromStorage());
  }
  ngOnDestroy() {
    this.userService.saveInStorage(this.userList);
  }

  save(f)
  {
    alert(this.userList.FirstName)
    alert(this.userList.UserId)
    alert(this.userList.Hmo)
    alert(this.userList.Kind)

    this.userService.RegisterUser(this.userList).subscribe((succ) => {
   this.userService.saveInStorage(this.userList);
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
  alert(this.userService.getFromStorage().id)
  }
  saveName(){
    this.userService.saveInStorage(this.userList);
  }
  addChild(){
    
    
    this.childService.RegisterChilren(this.Child).subscribe((succ) => {
   alert("good");
    }
      , (err) => {
     alert("bad");
      });
      this.Child.ParentId=this.userService.getFromStorage().UserId;
      
    alert(this.Child.ParentId);
   this.Child=new Child(null,null,null,null)
  }
}