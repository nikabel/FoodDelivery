import {Component, OnInit, Input} from '@angular/core';
import {FoodService} from "../../services/food.service";
import {Restaurant} from "../../classes/restaurant";
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.less']
})
export class RestaurantComponent implements OnInit {
  @Input() rest!: Restaurant;
  public restaurantIcon!: string;
  public restaurantName!: string;
  public restaurantType!: string;
  public restId!: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const restaurant = new Restaurant(this.rest)
    this.restaurantIcon = restaurant._icon;
    this.restaurantName = restaurant._name;
    this.restaurantType = restaurant._foodType;
    this.restId = restaurant._id;
  }

  onSelect(restaurant: Restaurant) {
    this.router.navigate(['restaurants', restaurant._id])
  }


}
