import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-list/product';

const URL= 'https://649b797cbf7c145d023a52d7.mockapi.io/nombres/productos';



@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  
  constructor(private http : HttpClient) { }
/*
consume la api y devuelve un observable a la respuesta
*/
  public getAll(): Observable <Product[]>{
    //como el fetch en js
 return  this.http.get<Product[]>(URL);
  }
}
