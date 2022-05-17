import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Client} from "../classes/client";
import {Restaurant} from "../classes/restaurant";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private url: string = 'http://localhost:8000/api';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  addClient(client: any): Observable<any> {

    const url = `${this.url}/clients`;
    return this.http.post<any>(url, client).pipe(
      catchError(this.handleError<any>('addClient'))
    );
  }


}
