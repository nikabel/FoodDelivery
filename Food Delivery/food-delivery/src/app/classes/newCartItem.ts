// export class NewCartItem {
//   public productId: string | undefined;
//   public quantity: number = 0;
// }
export  class NewCartItem  {
  public _id: string;
  public _name: string;
  public _price: number;
  public _icon: string;
  public _description: string;
  public _weight: number;
  public _foodType: string;
  public _restaurantName: string;
  public _quantity: number;

   constructor(itemData: any) {


    this._id = itemData._id;
    this._name = itemData._name;
    this._price = itemData._price;
    this._description = itemData._description;
    this._icon = itemData._icon;
    this._weight = itemData._weight;
    this._foodType = itemData._foodType;
    this._restaurantName = itemData._restaurantName;
    this._quantity = 0;
  }

  getId(): any {
    return this._name
  }

  getName(): string {
    return this._name;
  }

  getPrice(): number {
    return this._price;
  }

  getImage(): string {
    return this._icon;
  }

  getQuantity(): number {
    return this._quantity;
  }

  setQuantity(quantity: number): void {
    this._quantity = quantity;
  }

  getDescription(): string {
    return this._description;
  }

  getWeight(): number {
    return this._weight;
  }



  total(): number {
    return (this._quantity * this._price);
  }
}

