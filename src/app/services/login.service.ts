import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin = 'http://localhost:5171/api/login/iniciar_sesion';

  constructor(private http: HttpClient) { 
    
  }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlLogin);
  }
}
