import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../classes/restaurant";
import {Dish} from "../../classes/dish";
import {CartService} from "../../services/cart.service";
import {NewCartItem} from "../../classes/newCartItem";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.less']
})
export class DishComponent implements OnInit {
  @Input() dish: Dish | undefined;
  public dishIcon: string | undefined;
  public dishName: string | undefined;
  public dishPrice: number | undefined;
  public newDish : NewCartItem | undefined
  public dishDescription: string | undefined;
  public dishWeight: number | undefined;
  public dishFoodType: string | undefined;

  constructor(private cartService:CartService) {

  }

  ngOnInit(): void {
    console.log(this.dish)
    this.newDish = new NewCartItem(this.dish);
    console.log(this.dish)
    console.log(this.newDish)
    this.dishName = this.newDish._name;
    this.dishPrice = this.newDish._price;
    this.dishIcon = this.newDish._icon;
    this.dishDescription = this.newDish._description;
    this.dishWeight = this.newDish._weight;
    this.dishFoodType = this.newDish._foodType;

  }
  public addProductToCart(): void {
    console.log(this.newDish)
    this.cartService.addItem(this.newDish, 1);
    console.log('click')
  }
  public removeProductFromCart(dish:Dish): void {
    this.cartService.addItem(this.newDish, -1);
  }
}
