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

  shoppingList$: Observable<Product[]>;

  constructor(private cartService: ProductCartService) {
    this.shoppingList$ = this.cartService.shoppingList.asObservable();
  }

  ngOnInit(): void {}

  removeFromCart(product: Product): void {
    this.cartService.deleteFromCart(product);
  }


}
