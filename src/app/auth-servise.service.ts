import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiseService {

  constructor(private http:HttpClient) { }
  getToken(data: any):Observable<any>{
    return this.http.post(' https://615f-37-237-80-27.ngrok-free.app/login', data) 
  }

  getProdects():Observable<any>{
    return this.http.get('https://fakestoreapi.com/products')
  }
  getOneProdect(id:any):Observable<any>{
    return this.http.get("https://fakestoreapi.com/products/"+id)
  }
}
