import { Component, ElementRef, Host, OnDestroy, OnInit, Optional, QueryList, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgSelectOption, SelectControlValueAccessor, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Restaurant } from 'src/app/classes/restaurant';
import {FoodService} from '../../services/food.service'
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-create-page-dish',
  templateUrl: './create-page-dish.component.html',
  styleUrls: ['./create-page-dish.component.less']
})

export class CreatePageDishComponent implements OnInit {
  createForm!: FormGroup;
  restaurants!: Restaurant [];
  selectedRestId!: string;
  sub!: Subscription;
  restaurantName!: String [];

  constructor(public foodService: FoodService,public auth: AuthService) { }

  ngOnInit(): void {
    this.sub=this.foodService.getRestaurants().subscribe(
      data => this.restaurants=data
    );
    this.createForm=new FormGroup({
      "name": new FormControl(null, Validators.required),
      "price": new FormControl(null, Validators.required),
      "description":new FormControl(null, Validators.required),
      "weight": new FormControl(null, Validators.required),
      "type": new FormControl(null, Validators.required),
      "restaurant": new FormControl(null),
      "image": new FormControl(null, Validators.required)
    }); 
  }

  onSelect(restId: any): void {
    this.selectedRestId = restId;
  }

  sendForm(){
    this.createForm.value.restaurant=this.selectedRestId;
    const obj={
      "_name": this.createForm.value.name,
      "_price": this.createForm.value.price,
      "_icon": this.createForm.value.image,
      "_description": this.createForm.value.description,
      "_weight": this.createForm.value.weight,
      "_foodType": this.createForm.value.type,
      "_restaurantId": this.createForm.value.restaurant
    };
    const json=JSON.stringify(obj);
    this.foodService.createDish(json).subscribe(()=>{
      this.createForm.reset();
    })
  }
}
