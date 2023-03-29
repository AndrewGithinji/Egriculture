import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { ButtonComponent } from './button/button.component';
import { AmountSelectorComponent } from './amount-selector/amount-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    PageNotFoundComponent,
    CheckoutFormComponent,
    ConfirmationComponent,
    HeaderComponent,
    DashboardComponent,
    CartComponent,
    CartProductComponent,
    ButtonComponent,
    AmountSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
