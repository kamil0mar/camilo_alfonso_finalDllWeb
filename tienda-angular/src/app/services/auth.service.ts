import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor( private router : Router, private http: HttpClient ) { }

  logout(){
    sessionStorage.removeItem('Session'); //Eliminar los datos de la sesión
    this.router.navigate(['login']) //Redireccionar a la página de inicio de sesión
  }

  checkSession(){
    return sessionStorage.getItem("Session"); //Verificar si hay una sesión iniciada
  }

}
