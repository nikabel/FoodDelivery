import {Client} from "./client";
import {Dish} from "./dish";
export class Order {
  private _id: string;
  private _orderPrice: number;
  private _deliveryPrice:number;
  private _datetimeOrder: string;
  private _datetimeDelivery:string;
  private _paymentType:string;

  constructor(id: string,dish:Dish[], orderPrice: number,deliveryPrice:number,paymentType:string, datetimeOrder: string,datetimeDelivery:string,client: Client) {
    this._id = id;
    this._orderPrice = orderPrice;
    this._datetimeOrder = datetimeOrder;
    this._datetimeDelivery=datetimeDelivery;
    this._deliveryPrice=deliveryPrice;
    this._paymentType=paymentType;
  }

  get id(): string {
    return this._id;
  }
}
