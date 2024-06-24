import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ConsultantMarykayComponent } from './consultant-marykay/consultant-marykay.component';
import { FormsModule } from '@angular/forms';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

import { FormConsultantComponent } from './form-consultant/form-consultant.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ConsultantMarykayComponent,
    HomecomponentComponent,
    ContactoComponent,
    NosotrosComponent,
 
    FormConsultantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
