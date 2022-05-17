export class Client {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _address: string;

  constructor(id: string, name: string, email: string, password: string, address: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._address = address;
  }

  get id(): string {
    return this._id;
  }
  get address():string{
    return this._address;
  }
  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

}
