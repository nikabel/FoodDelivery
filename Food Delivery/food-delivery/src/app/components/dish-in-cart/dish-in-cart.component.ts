import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../../classes/dish";
import {NewCartItem} from "../../classes/newCartItem";
import {CartService} from "../../services/cart.service";
import {Observable, Subscription} from "rxjs";
import {ShoppingCart} from "../../classes/shoppingCart";

@Component({
  selector: 'app-dish-in-cart',
  templateUrl: './dish-in-cart.component.html',
  styleUrls: ['./dish-in-cart.component.less']
})
export class DishInCartComponent implements OnInit {
  @Input()dish: NewCartItem | undefined;
  public newDish : NewCartItem | undefined
  public dishIcon: string | undefined;
  public dishName: string | undefined;
  public dishPrice: number | undefined;
  public dishDescription: string | undefined;
  public dishWeight: number | undefined;
  public dishFoodType: string | undefined;
  public dishQuantity:number | undefined;
  public itemCount: number | undefined;
  totalPrice: number  | undefined;
  private cartSubscription: Subscription | undefined;
  public cart: Observable<ShoppingCart> | undefined;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.get();
    this.newDish = new NewCartItem(this.dish);
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.totalPrice=cart.grossTotal

     // @ts-ignore
      const dishfind=cart.items.find((p) => p._id === this.newDish._id);
      // @ts-ignore

      this.itemCount = cart.items.map((x) => x._quantity).reduce((p, n) => p + n, 0);
    })
    console.log(this.dish)


    console.log(this.dish)
    console.log(this.newDish)
    this.dishName = this.newDish._name;
    this.dishPrice = this.newDish._price;
    this.dishIcon = this.newDish._icon;
    this.dishDescription = this.newDish._description;
    this.dishWeight = this.newDish._weight;
    this.dishFoodType = this.newDish._foodType;
    this.dishQuantity=this.newDish._quantity;
  }
  public addProductToCart(): void {
    this.cartService.addItem(this.newDish, 1);
  }
  public removeProductFromCart(): void {
    this.cartService.addItem(this.newDish, -1);
  }
}
