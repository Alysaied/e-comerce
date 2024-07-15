import {RouterModule, Routes} from '@angular/router';
import {AllProductComponent} from "./component/all-product/all-product.component";
import {CartsComponent} from "./component/carts/carts.component";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {ProductDetailsComponent} from "./component/product-details/product-details.component";
import {ProductModule} from "./services/product/product.module";
import {CartsModule} from "./services/carts/carts.module";
export const routes: Routes = [
  {path:"products",component:AllProductComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:'cart',component:CartsComponent},
  {path:"**", redirectTo:"cart",pathMatch:"full"}
];
@NgModule({
  imports:[RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    ProductModule,
    CartsModule
  ],
  exports:[
    RouterModule
  ],
  declarations:[],
  bootstrap:[]
})
export class AppRoutingModule{}
