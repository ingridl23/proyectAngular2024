import { NgModule } from '@angular/core';
import { producerUpdatesAllowed } from '@angular/core/primitives/signals';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ConsultantMarykayComponent } from './consultant-marykay/consultant-marykay.component';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

import { ContactoComponent } from './contacto/contacto.component';
import { FormConsultantComponent } from './form-consultant/form-consultant.component';

const routes: Routes = [
 { path:'',
  redirectTo : 'home',
  pathMatch:'full',
},

  { path:'products', component : ProductListComponent},
  {path:'home', component: HomecomponentComponent}, 
  { path:'shopping-cart', component : ShoppingCartComponent},
  {path:'consultant', component : ConsultantMarykayComponent},
  {path: 'contact' , component : ContactoComponent},
  {path:'form consultant', component: FormConsultantComponent},
  {path: 'about us', component: NosotrosComponent},
  


  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
