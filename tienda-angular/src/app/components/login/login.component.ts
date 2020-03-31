import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
//======================Importar Servicios======================================
import { AuthService } from "../../services/auth.service";
//==============================================================================
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje:string; //Variable error de tipo srting
  loginForm : FormGroup; //Variable formulario como un FormGroup
  items: AngularFireList<any[]>;
  email : string;
  password: string;


  constructor(private db: AngularFireAuth, private auth : AuthService, private router: Router) {
    if(this.auth.checkSession()){
       this.router.navigate(['tienda'])
     }
  };

  ngOnInit() {
    this.email = " ";
    this.password = " ";
    if(this.auth.checkSession()){
      this.router.navigate( ['/tienda'])
    }
    this.loginForm = new FormGroup(
      {
        'email' : new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),
      }
    )
  }

  checkLogin(){
    if(this.loginForm.valid){
      this.email = this.loginForm.value.email.toLowerCase().replace(/[^a-zA-Z 0-9.]+/g,'').replace(/\./g,'');
      this.password = this.loginForm.value.password;
      let loginUser = `/usuarios/${this.email}`
      const user = this.db.auth.signInWithEmailLink(loginUser);
      user.then(data => {
        console.log(this.email)
        if(this.loginForm.value.email === "test@email.com"){
        //if(data.$exists()){
          console.log ('Email correcto: ' + data.user)
          //if (data.password == this.password){
            this.mensaje = "Iniciando Sesión";
            sessionStorage.setItem("Session", this.loginForm.value.email);
            console.log(this.mensaje);
            this.router.navigate(['tienda']);
          }else{
            this.mensaje = 'Usuario / Contraseña Incorrecta';
            console.log(this.mensaje);
          }
      });
    }
  }
}
