import { Component } from '@angular/core';
import { Product } from './product';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrl: 'product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] =[];
  /*
{

    id:1,
    name:"labial en barra",
    type:"mate",
    precio:15000,
    stock:5 ,
    img: "assets/images/labiales.jpg", 
    tonalidades: ['Rojo', 'Uva', 'Rosa'] ,
    clearance: false,
    quantity: 0,

  },

  {

    id:2,
    name:"base correctora",
    type:"liquido mate",
    precio:25000,
    stock:0 ,
    img: "assets/images/base cc cream1.jpg" ,
    tonalidades: ['claro','medio','oscuro],
    clearance:true,
    quantity: 0,
  },

  {

    id:3,
    name:"delineador",
    type:"lapiz liquido",
    precio:10000,
    stock:100 ,
    img: "assets/images/delineador azul.jpg" ,
    tonalidades:['azul','negro','metal'];
    clearance:false,
    quantity: 0,
  },


];
*/

constructor( private cart: ProductCartService , 
             private productDataservice : ProductDataService ){ //inyecciones de los servicios


}
ngOnInit(): void {

this.productDataservice.getAll()
.subscribe(products => this.products = products);


}

upQuantity(product:Product): void{
if(product.quantity<product.stock ){
  product.quantity++;
}
 

}
 

downQuantity(product:Product): void{
if(product.quantity >0){
  product.quantity--;

}
 
}


ChangeQuantity(event: { key: any; preventDefault: () => void; }, product:Product):void{

  console.log(event.key);
  event.preventDefault();

}


  addToCart(product: Product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity=0;
  }

}



