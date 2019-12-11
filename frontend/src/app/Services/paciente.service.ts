import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Registro_PacienteService {

  serverUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  getPaciente(): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverUrl}/registro_paciente`).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
    errorMessage = `An error ocurred ${ err.error.message }`;
    } else {
    errorMessage = `Server returned code: ${err.status}, error message is:
    ${err.message}`;
    } console.log(errorMessage);
    return throwError(errorMessage);}
}
export class LoginService {

  constructor(public http: HttpClient) { }

  login(user){
      let urlService = 'http://localhost:3000/tabs/tab1';
      return new Promise(resolve => {
        return this.http.get(urlService)
          .subscribe(
            data => {
              resolve(data);
            }, err => {
              if (err.status === 0)
              {
                resolve(err.status);
              }
              else
              {
                resolve(null);
              }
            });
      });
  }
}