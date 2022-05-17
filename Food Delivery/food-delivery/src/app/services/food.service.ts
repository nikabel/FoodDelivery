import {Injectable} from '@angular/core';
import {Restaurant} from "../classes/restaurant";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Dish} from "../classes/dish";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http: HttpClient) {
  }

  private url: string = 'http://localhost:3000/api';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getRestaurants(): Observable<Restaurant[]> {
    const url = `${this.url}/restaurants`
    return this.http.get<Restaurant[]>(url)
      .pipe(
        catchError(this.handleError<Restaurant[]>('getRestaurants', []))
      );
  }

  /*getRestaurants(): Observable<any> {
    const url = `${this.url}/restaurants`
    return this.http.get<any>(url);
  }*/

  getRestaurant(id: string): Observable<Restaurant> {
    const url = `${this.url}/restaurants/${id}`;
    return this.http.get<Restaurant>(url)
      .pipe(
        catchError(this.handleError<Restaurant>(`getRestaurant id=${id}`))
      );
  }
  addRestaurant(restaurant:Restaurant):Observable<Restaurant> {
    const url=`${this.url}/restaurants`;
    return this.http.post<Restaurant>(url, restaurant).pipe(
      catchError(this.handleError<Restaurant>('addRestaurant'))
    );
  }
  searchRestaurant(line:string): Observable<Restaurant[]>{
    if(!line.trim()){
      return of ([]);
    }
    else return this.http.get<Restaurant[]>(`${this.url}/restaurants/${line}`);
  }
  addDish(dish: any):Observable<any>{
    const url=`${this.url}/dishes`;
    return this.http.post<any>(url, dish).pipe(
      catchError(this.handleError<any>('addDish'))
    );
  }


  getAllDishes(): Observable<any>{
     const url = `${this.url}/dishes`
     return this.http.get(url);
   }

  getDishes(id: string): Observable<Dish[]>{ //get all dishes of the restaurant with the passed id
    const url = `${this.url}/dishes/${id}`
    return this.http.get<Dish[]>(url)
      .pipe(
        catchError(this.handleError<Dish[]>('getDishes'))
      );
  }

  getDish(id: string): Observable<Dish>{ 
    const url = `${this.url}/dishes/${id}`
    return this.http.get<Dish>(url);
  }

  deleteDish(id:string): Observable<any>{
    const url = `${this.url}/dishes/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError<any>('deleteDish'))
    );
  }

  createDish(dish: any):Observable<any>{
    const url = `${this.url}/dishes`;
    return this.http.post(url, dish);
  }

  updateDish(id: string, dish: any):Observable<any>{
    const url=`${this.url}/dishes/${id}`;
    return this.http.patch<Dish>(url, dish).pipe(
      catchError(this.handleError<Dish>('updateDish'))
    );

  }
  postOrder(order: any):Observable<any>{
    const url = `${this.url}/orders`;
    return this.http.post(url, order);
  }
}
