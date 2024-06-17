import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrl: 'product-list.component.scss'
})
export class ProductListComponent {

  products: Product[] =[
    {

    
    name:"labial en barra",
    tipo:"mate",
    precio:15000,
    stock:80 ,
    img: "assets/images/labiales.jpg", 
    tono1: "rojo",
    tono2:"uva",
    tono3:"rosa",
    clearance: false,

  },

  {

    
    name:"base correctora",
    tipo:"liquido mate",
    precio:25000,
    stock:40 ,
    img: "assets/images/base cc cream1.jpg" ,
    tono1:"claro",
    tono2:"medio",
    tono3:"oscuro",
    clearance:true,
  },

  {

    
    name:"delineador",
    tipo:"lapiz liquido",
    precio:10000,
    stock:100 ,
    img: "assets/images/delineador azul.jpg" ,
    tono1:"azul",
    tono2:"negro",
    tono3:"metal",
    clearance:false,
  },


]
 
}

  

