import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  actividad: string;
  buenClima: boolean;
  ejercicios: Array<string>;
  constructor() { 
    this.actividad = "dia de hacer ejercicio"
    this.buenClima = false
    this.ejercicios = [ "prensa", "dominadas", "sentadillas", "saltos"]
  }

  ngOnInit(): void {
    console.log("componente login-form montado")
  }

  cambiarClima() {
    this.buenClima = !this.buenClima
  }

}
