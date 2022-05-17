import {NewCartItem} from "./newCartItem";

export class ShoppingCart {
  public items: NewCartItem[] = new Array<NewCartItem>();

  public grossTotal: number = 0;
  public deliveryTotal: number = 250;
  public itemsTotal: number = 0;

  public updateFrom(src: ShoppingCart) {
    this.items = src.items;

    this.grossTotal = src.grossTotal;
    this.deliveryTotal = src.deliveryTotal;
    this.itemsTotal = src.itemsTotal;
  }
}
