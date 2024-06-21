import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {

constructor(cart: ProductCartService){
  
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
