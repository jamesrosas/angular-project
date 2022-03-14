import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseauthService } from '../services/firebaseauth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  admin = {
    email: "",
    password: ""
  }

  constructor(private firebaseauthService: FirebaseauthService, private router: Router) {
  }

  ngOnInit(): void {
    console.log("componente login-form montado")
  }

  handleSubmit() {
    console.log("haciendo submit")
    console.log(this.admin.email, this.admin.password)

  //   const { email, password } = this.admin
  //   if (email === environment.adminEmail || environmentProd.adminEmail) {
  //     this.firebaseauthService.signIn(email, password).then((user) => {
  //       if (user) {
  //         this.router.navigate(["/users-data"]).then(() => alert("bienvenido admin"))
  //       }
  //     })
  //   } else {
  //     alert("tienes que ser administrador para ingresar")
  //   }
  // }

  const { email, password } = this.admin
  if (email === environment.adminEmail ) {
    this.firebaseauthService.signIn(email, password).then((user) => {
        if(user) {
          this.router.navigate(["/users-data"]).then(() => {
            alert("welcome admin")
          })
        }
    })
    }
}


}
