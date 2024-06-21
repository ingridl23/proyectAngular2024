import { Injectable } from '@angular/core';
import { Product } from './product-list/product';
//maneja la logica del carrito

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  constructor() { }

shoppingList : Product [] =[];




 addToCart(product: Product) {
  this.shoppingList.push(product);
 
}

}