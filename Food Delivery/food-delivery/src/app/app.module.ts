import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { CompletedPuComponent } from './components/completed-pu/completed-pu.component';
import { AuthorizationPuComponent } from './components/authorization-pu/authorization-pu.component';
import { OrderDetailsPuComponent } from './components/order-details-pu/order-details-pu.component';
import { CartPuComponent } from './components/cart-pu/cart-pu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FoodService} from "./services/food.service";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./services/users.service";
import {CarouselModule} from "ngx-owl-carousel-o";
import { AuthModule } from '@auth0/auth0-angular';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RestaurantComponent} from "./components/restaurant/restaurant.component";
import { MenuComponent } from './components/menu/menu.component';
import { DishComponent } from './components/dish/dish.component';
import {ShoppingCartModule} from "ng-shopping-cart";
import {NewCartItem} from './classes/newCartItem'
import {CartService} from "./services/cart.service";
import { LocalStorageService, StorageService } from "./services/storage.service";
import { DishInCartComponent } from './components/dish-in-cart/dish-in-cart.component';
import {SortingPipe} from './pipes/sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    CompletedPuComponent,
    AuthorizationPuComponent,
    OrderDetailsPuComponent,
    CartPuComponent,
    MainLayoutComponent,
    RestaurantComponent,
    MenuComponent,
    DishComponent,
    DishInCartComponent,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    AuthModule.forRoot({
      domain: 'dev-t82y832c.eu.auth0.com',
      clientId: 'vqRflm8jp1AXOjri2hL31IlBCXGFrmzT'
    }),
  ],
  providers: [
    FoodService,
    UsersService,
    CartService,
    LocalStorageService,
    { provide: StorageService, useClass: LocalStorageService },
    {
      deps: [StorageService,FoodService],
      provide: CartService,
      useClass: CartService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
