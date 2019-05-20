import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UserauthService {


private loggedInStatus = JSON.parse(localStorage.getItem('logFlag') || 'false')
private url : string = "https://lit-eyrie-15561.herokuapp.com/userAuth";//"http://localhost:8080/userAuth";
private auth_url : string = "https://lit-eyrie-15561.herokuapp.com/auth_user";//"http://localhost:8080/auth_user";
private geturl :string = "https://lit-eyrie-15561.herokuapp.com/getUsers";//"http://localhost:8080/getUsers";
private reg_url : string = "https://lit-eyrie-15561.herokuapp.com/signup_user";//"http://localhost:8080/signup_user";
private url_1 : string = "https://obscure-springs-69062.herokuapp.com/userAuth";
private geturl_1 :string = "https://obscure-springs-69062.herokuapp.com/getUsers";
  constructor(private http: HttpClient) { 
  }

  setLoggedIn(value : boolean,userId : string){
    this.loggedInStatus = value
    localStorage.setItem('logFlag','true')
    localStorage.setItem('userId',userId)
  }  

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('logFlag') || this.loggedInStatus)
  }

  get loggedInUser(){
    return JSON.parse(localStorage.getItem("userId"));
  }
  setLogout(){
    this.loggedInStatus = false;
    localStorage.removeItem('logFlag');
    localStorage.removeItem('userId');
  }
  public auth_user(u : User){
    return this.http.post(this.auth_url,u,{responseType: 'text'});
  }
  public authUser( u : User  ) {
    return this.http.post<string>(this.url_1,u);
  }
  public registerUser(u : User){
    return this.http.post<User>(this.reg_url,u);
  }
  public getUsers():Observable<String>{
    return this.http.get<String>(this.geturl_1);
  }
}
