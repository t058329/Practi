import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';
import User from 'src/class/User';
import { environment } from 'src/environment/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser=new BehaviorSubject<{name:string,id:string}>(null);
  saveInStorage(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }
  getFromStorage() {
    let u = localStorage.getItem("currentUser");
    if (!u)
      return null;
    return JSON.parse(u);
  }
  removeFromStorage() {
    localStorage.removeItem("currentUser");
  }

  [x: string]: any;

  constructor(public http:HttpClient) { }
  baseRouteUrl = `${environment.baseUrl}/user`
  GetAllUsers() {
    return this.http.get<User[]>(`${this.baseRouteUrl}`);
  }
  GetUserById(id) {
    return this.http.get<User>(`${this.baseRouteUrl}`,id);
  }
 RegisterUser(user:User) {
   return this.http.post<User>(`${this.baseRouteUrl}`,user);
  }

}
