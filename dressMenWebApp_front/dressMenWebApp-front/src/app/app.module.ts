import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogBodyComponent } from './catalog-body/catalog-body.component';
import { OrderFormBodyComponent } from './order-form-body/order-form-body.component';
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CatalogComponent,
    CatalogBodyComponent,
    OrderFormBodyComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,RouteRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
