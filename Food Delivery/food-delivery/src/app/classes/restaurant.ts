export class Restaurant {
  _id: string;
  _name: string;
  _icon: string;
  _address: string;
  _foodType: string;

  constructor(data:any) {
    this._id = data._id;
    this._name = data._name;
    this._icon = data._icon;
    this._address = data._address;
    this._foodType = data._foodType;

  }

  /*get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get icon(): string {
    return this._icon;
  }

  get address(): string {
    return this._address;
  }

  get foodType(): string {
    return this._foodType;
  }*/


}
