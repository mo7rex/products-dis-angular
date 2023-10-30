import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiseService {

  constructor(private http:HttpClient) { }
  getToken(data: any):Observable<any>{
    return this.http.post('https://api.escuelajs.co/api/v1/auth/login', data)
  }

  getProdects():Observable<any>{
    return this.http.get('https://fakestoreapi.com/products')
  }
  getOneProdect(id:any):Observable<any>{
    return this.http.get("https://fakestoreapi.com/products/"+id)
  }
}
