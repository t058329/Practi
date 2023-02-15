import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import Child from 'src/class/Child';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  currentUser=new BehaviorSubject<{name:"",id:string}>(null);
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
  baseRouteUrl = `${environment.baseUrl}/child`
  GetAllChildren() {
    return this.http.get<Child[]>(`${this.baseRouteUrl}`);
  }
  GetChildById(id) {
    return this.http.get<Child>(`${this.baseRouteUrl}`,id);
  }
 RegisterChilren(child:Child) {
   return this.http.post<Child>(`${this.baseRouteUrl}`,child);
  }
}
