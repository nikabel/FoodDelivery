import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FoodService} from "../../services/food.service";
import {Restaurant} from "../../classes/restaurant";
import {Dish} from "../../classes/dish";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  dishList!: Dish[];
  sort: string="none";
  filteredDishList!: Dish[];
  restaurantName!: string;
  restaurantType!: string;
  filtered=false;

  constructor(private router: ActivatedRoute, private service: FoodService) {
  }

  ngOnInit(): void {
    const restaurantId = this.router.snapshot.params.id;
    console.log(restaurantId);
    this.getRestaurant(restaurantId);
    this.getDishes(restaurantId);
  }

  getDishes(restaurantId: string): void {
    this.service.getDishes(restaurantId).subscribe(data => this.dishList = this.filteredDishList = data);

  }

  getRestaurant(restaurantId: string): void {
    this.service.getRestaurant(restaurantId).subscribe(data => {
      const restaurant = new Restaurant(data);
      this.restaurantName = restaurant._name;
      this.restaurantType = restaurant._foodType
    });
  }

  showFood(type: String):void{
    this.filtered=!this.filtered;
    this.filteredDishList=this.dishList.filter(function food(dish){
      return dish._foodType==type;
    });
    console.log(this.filteredDishList);
  }
}
