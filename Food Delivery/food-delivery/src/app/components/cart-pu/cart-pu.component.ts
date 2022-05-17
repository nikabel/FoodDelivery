import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ShoppingCart} from "../../classes/shoppingCart";
import {Observable, Subscription} from "rxjs";
import {CartService} from "../../services/cart.service";
import {NewCartItem} from "../../classes/newCartItem";

@Component({
  selector: 'app-cart-pu',
  templateUrl: './cart-pu.component.html',
  styleUrls: ['./cart-pu.component.less']
})
export class CartPuComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;
  showed=false;
  public cart: Observable<ShoppingCart> | undefined;
  public itemCount: number | undefined;
  public cartItems : NewCartItem[] | undefined;
  private cartSubscription: Subscription | undefined;
  public totalPrice: number | undefined;
  constructor(private shoppingCartService: CartService) { }

  ngOnInit(): void {

    this.cart = this.shoppingCartService.get();
    this.cart.subscribe((cart)=>{this.cartItems=cart.items;})
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x._quantity).reduce((p, n) => p + n, 0);
      this.totalPrice=cart.grossTotal
    });
    // @ts-ignore
    console.log(this.cartItems[0]);

  }

  show():void{
    this.modal.nativeElement.setAttribute('style', 'display: none');
    this.showed=!this.showed;
  }

  close=():void=>{
    this.modal.nativeElement.setAttribute('style', 'display: none');
  }
}
