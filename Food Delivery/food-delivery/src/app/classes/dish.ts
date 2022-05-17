import {Restaurant} from "./restaurant";

export class Dish {
  _id: string;
  _name: string;
  _price: number;
  _icon: string;
  _description: string;
  _weight: number;
  _foodType: string;
  _restaurantId: string;

  constructor(data:any) {
    this._id = data._id;
    this._name = data._name;
    this._price = data._price;
    this._icon = data._icon;
    this._description = data._description;
    this._weight = data._weight;
    this._foodType=data._foodType;
    this._restaurantId = data._restaurantId;
  }

  /*get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
  get icon():string{
    return this._icon;
  }
  get restaurantName():string{
    return this._restaurantId;
  }
  get foodType():string{
    return this._foodType;
  }
  get weight():number{
    return this._weight;
  }
  get description():string{
    return this._description;
  }
  get price():number{
    return this._price;
  }*/
}
