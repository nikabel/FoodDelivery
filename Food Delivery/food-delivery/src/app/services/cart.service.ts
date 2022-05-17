import {Injectable, OnInit} from '@angular/core';
import {ShoppingCart} from "../classes/shoppingCart";
import {Observable, Observer} from "rxjs";
import {Dish} from "../classes/dish";
import {StorageService} from "./storage.service";
import {FoodService} from "./food.service";
import {NewCartItem} from "../classes/newCartItem";

const CART_KEY = "cart";

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit  {
  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
  private dishes: Dish[] | undefined;

  constructor(private storageService: StorageService,private foodService:FoodService) {
    this.storage = this.storageService.get();
    this.ngOnInit();
    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      this.subscribers.push(observer);
      observer.next(this.retrieve());
      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
  }
  ngOnInit(){
    this.foodService.getAllDishes().subscribe((products) => {this.dishes = products;console.log(products)});

  }
  public get(): Observable<ShoppingCart> {
    return this.subscriptionObservable;
  }
  public addItem(product: NewCartItem | undefined, quantity: number): void {
    const cart = this.retrieve();
    console.log(cart);
    // @ts-ignore
    let item = cart.items.find((p) => p._id === product._id);
    console.log(item)

    if (item === undefined) {

      item = new NewCartItem(product);

      console.log(product)
      item._id = product!._id;
      cart.items.push(item);
      console.log(item)
    }

    item._quantity += quantity;
    console.log(item._quantity)
    cart.items = cart.items.filter((cartItem) => cartItem._quantity > 0);


    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  private retrieve(): ShoppingCart {
    const cart = new ShoppingCart();
    const storedCart = this.storage.getItem(CART_KEY);
    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }

    return cart;
  }

  public empty(): void {
    const newCart = new ShoppingCart();
    this.save(newCart);
    this.dispatch(newCart);
  }

  private save(cart: ShoppingCart): void {
    this.storage.setItem(CART_KEY, JSON.stringify(cart));
  }

  private dispatch(cart: ShoppingCart): void {
    this.subscribers
      .forEach((sub) => {
        try {
          sub.next(cart);
        } catch (e) {
          // we want all subscribers to get the update even if one errors.
        }
      });
  }
  private calculateCart(cart: ShoppingCart): void {

    cart.itemsTotal = cart.items

      // @ts-ignore
      .map((item) => item._quantity * item._price)
      .reduce((previous, current) => previous + current, 0);
    // cart.deliveryTotal = cart.deliveryOptionId ?
    //   this.deliveryOptions.find((x) => x.id === cart.deliveryOptionId).price :
    //   0;
    cart.grossTotal = cart.itemsTotal +cart.deliveryTotal;
  }
}
