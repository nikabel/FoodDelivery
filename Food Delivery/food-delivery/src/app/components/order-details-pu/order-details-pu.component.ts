import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {CartService} from "../../services/cart.service";
import {Observable, Subscription} from "rxjs";
import {ShoppingCart} from "../../classes/shoppingCart";
import {NewCartItem} from "../../classes/newCartItem";

@Component({
  selector: 'app-order-details-pu',
  templateUrl: './order-details-pu.component.html',
  styleUrls: ['./order-details-pu.component.less']
})
export class OrderDetailsPuComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;
  showed=false;
  createForm!: FormGroup;
  submitted=false;
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
    this.createForm=new FormGroup({
      "telephone": new FormControl(null, Validators.required),
      "address": new FormControl(null, Validators.required),
      "payment": new FormControl(null)
    });
  }

  onSubmit() { this.submitted = true; }

  show():void{
    this.modal.nativeElement.setAttribute('style', 'display: none');
    this.showed=!this.showed;
  }

  close=():void=>{
    this.modal.nativeElement.setAttribute('style', 'display: none');
  }

}
