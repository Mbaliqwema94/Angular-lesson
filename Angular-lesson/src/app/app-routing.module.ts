import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'', component: HomepageComponent},
  {path:'nav', component: NavbarComponent},
  {path:'footer', component: FooterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
