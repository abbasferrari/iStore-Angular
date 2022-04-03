import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, ObservableLike } from 'rxjs';
import { Item } from './ad-dashboard/Item';
import { Transaction } from './order-checkout/TransactionObject';
import { Ad } from './Ad';
@Injectable({
  providedIn: 'root'
})
export class AdServiceService {
  private showad_url = http:localhost:8080/showAds; //"https://istore-jpa-spring-boot-backend.herokuapp.com/showAds";
  private postad_url = http:localhost:8080/postAd; //"https://istore-jpa-spring-boot-backend.herokuapp.com/postAd"
  private soldad_url = http:localhost:8080/updateAdStatus; //"https://istore-jpa-spring-boot-backend.herokuapp.com/updateAdStatus";
  private checkout_url = http:localhost:8080/checkOutAd; //"https://istore-jpa-spring-boot-backend.herokuapp.com/checkOutAd";
  private getTransId_url = http:localhost:8080/getTransId; //"https://istore-jpa-spring-boot-backend.herokuapp.com/getTransId";
  private c_url = "http://localhost:8080/c";

  constructor(private http:HttpClient) { }
  
  public postAd(ad : Ad){
    return this.http.post<Ad>(this.postad_url,ad);
  }
  public showAds():Observable<Item []>{
    return this.http.get<Item []>(this.showad_url);
  }
  public c(s : string){
    return this.http.post<string>(this.c_url,"done");//"{\"id\":\"123\",\"tempId\":\"123\",\"buyerId\":\"123\",\"timestamp\":\"123\"}");
  }
  public checkOutAd(transaction : Transaction){
    return this.http.post<Transaction>(this.checkout_url,transaction);
  }
  public getTransId(transaction : Transaction){
    return this.http.post<string>(this.getTransId_url,transaction);
  }
  public soldAd(ad : String){
    return this.http.post<String>(this.soldad_url,ad);
  }
  public show():Observable<Item>{
    return this.http.get<Item>(this.showad_url);
  }
}
