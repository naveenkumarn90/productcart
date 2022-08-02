import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { CartComponent } from './component/cart/cart.component';
import { ModalComponent } from './component/modal/modal.component';
import { NewProductCategoryComponent } from './component/new-product-category/new-product-category.component';
import { NewProductComponent } from './component/new-product/new-product.component';
import { ProductComponent } from './component/product/product.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ServiceComponent } from './service/service.component';
import { CategoryComponent } from './app/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    CartComponent,
    ModalComponent,
    NewProductCategoryComponent,
    NewProductComponent,
    ProductComponent,
    WelcomeComponent,
    ServiceComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
