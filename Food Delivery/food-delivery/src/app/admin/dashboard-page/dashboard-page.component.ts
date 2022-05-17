import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {Dish} from '../../classes/dish';
import {FoodService} from '../../services/food.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.less']
})
export class DashboardPageComponent implements OnInit {

  dishes: Dish[] =[];
  dSub!: Subscription;
  searchStr='';

  constructor(private dishesService: FoodService, private route: Router) { }

  ngOnInit(): void {
    this.dSub=this.dishesService.getAllDishes().subscribe(dishes => {
      this.dishes = [...dishes];
    });
  }

  deleteDish(id: string){
    const desicion=window.confirm('Точно удалить это блюдо?');
    if (desicion){
      this.dishesService.deleteDish(id).subscribe(()=>{
            this.dishes=this.dishes.filter(dish=>dish._id!==id);
      });
    }
  }
}
