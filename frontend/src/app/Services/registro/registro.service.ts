import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Registro_PacienteService {

  serverUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  postRegistro_Paciente(ruta: string, body: any) {
    console.log('body', body);
    return this.http.post<any[]>(`${this.serverUrl}/registro_paciente`, body).pipe(
    );
  }
}
