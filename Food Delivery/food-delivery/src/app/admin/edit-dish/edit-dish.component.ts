import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Dish } from 'src/app/classes/dish';
import { Restaurant } from 'src/app/classes/restaurant';
import {FoodService} from '../../services/food.service'

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.less']
})
export class EditDishComponent implements OnInit {
  editForm!: FormGroup;
  dish!: Dish;
  restaurants!: Restaurant [];
  selectedRestId!: string;
  sub!: Subscription;

  constructor(private route: ActivatedRoute, public foodService: FoodService) { }

  ngOnInit() {

    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.foodService.getDish(params.id);
      })
    ).subscribe((dish: Dish) => {
      this.dish=dish;
      this.editForm =new FormGroup({
        "name": new FormControl(dish._name, Validators.required),
        "price": new FormControl(dish._price, Validators.required),
        "description": new FormControl(dish._description, Validators.required),
        "weight": new FormControl(dish._weight, Validators.required),
        "type": new FormControl(dish._foodType, Validators.required),
        "restaurant" : new FormControl(null),
        "image":new FormControl(dish._icon, Validators.required)
      });
      this.sub=this.foodService.getRestaurants().subscribe(
        data => this.restaurants=data
      );
    });
  }

  onSelect(restId: any): void {
    this.selectedRestId = restId;
  }

  sendForm(){
    this.editForm.value.restaurant=this.selectedRestId;
    const obj={
      "_name": this.editForm.value.name,
      "_price": this.editForm.value.price,
      "_icon": this.editForm.value.image,
      "_description": this.editForm.value.description,
      "_weight": this.editForm.value.weight,
      "_foodType": this.editForm.value.type,
      "_restaurantId": this.editForm.value.restaurant
    };
    const json=JSON.stringify(obj);
    this.foodService.updateDish(this.dish._id, json).subscribe(()=>{
      this.editForm.reset();
    })
  }
}
