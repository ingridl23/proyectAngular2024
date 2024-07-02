import { Injectable } from '@angular/core';
import { Product } from './product-list/product';
import { BehaviorSubject } from 'rxjs';
//maneja la logica del carrito

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  constructor() { }

  private _shoppingList: Product[] = [];
shoppingList : BehaviorSubject< Product [] >  = new BehaviorSubject(this._shoppingList);




 addToCart(product: Product) {
  
  //se modifica estalinea porque daba un error con la variable item si se declara de lasiguiete forma: let item: Product =....
let  item = this._shoppingList.find((v1) => v1.name.toLowerCase() == product.name.toLowerCase());

  if(!item){
    
    this._shoppingList.push({...product});//clona el objeto

  }else{
    item.quantity+= product.quantity;
  }

  console.log(this._shoppingList);
 this.shoppingList.next(this._shoppingList); //equivalente a emitt de eventos
}

deleteFromCart(product: Product) {
  const index = this._shoppingList.findIndex((v1) => v1.name.toLowerCase() === product.name.toLowerCase());

  if (index > -1) {
    this._shoppingList.splice(index, 1);
    console.log(this._shoppingList);
    this.shoppingList.next(this._shoppingList);
  }
}
}


