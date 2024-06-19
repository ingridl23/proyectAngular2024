import { NgModule } from '@angular/core';
import { producerUpdatesAllowed } from '@angular/core/primitives/signals';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ConsultantMarykayComponent } from './consultant-marykay/consultant-marykay.component';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';

const routes: Routes = [
 { path:'',
  redirectTo : 'home',
  pathMatch:'full',
},

  { path:'products', component : ProductListComponent},
  {path:'home', component: HomecomponentComponent},
{  path:'shopping-cart', component : ShoppingCartComponent},
{path:'consultant', component : ConsultantMarykayComponent},


  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
