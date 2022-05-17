import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {FoodService} from "../../services/food.service";
import {Restaurant} from "../../classes/restaurant";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag:true,
    pullDrag:true,
    dots: false,
    navSpeed: 700,
    navText: ['<img src=\'../../../assets/images/arrow-left.svg\'>',
    '<img src=\'../../../assets/images/arrow-right.svg\'>'],
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 1
     },
      940: {
       items: 1
     }
    },
    nav: true
  }
  restaurantList: Restaurant[] | undefined;
  constructor(private service:FoodService) {

  }

  ngOnInit(): void {
    this.service.getRestaurants().subscribe(data=>this.getRestaurants(data))
  }
  getRestaurants(data:Restaurant[]):void{
    this.restaurantList=data;
  }

}
