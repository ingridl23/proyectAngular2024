import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/product';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {

  shoppingList$!: Observable<Product[]>;
constructor(cart: ProductCartService){
this.shoppingList$= cart.shoppingList.asObservable();
  //cart.shoppingList.subscribe(c => this.shoppingList = c); //observables (esta linea nos ahorramos errores de subcripcion  y de memoria si se destruye o ocurre algo)s
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
