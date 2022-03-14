import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../services/firebaseauth.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  user= { 
    email: "",
    fullName: "",
    password: ""
  }

  constructor(private firebaseauthService: FirebaseauthService) { }

  ngOnInit(): void {
  }


  handleSubmitRegister () {

    const newUser = {
      fullName: this.user.fullName,
      email: this.user.email
    }

    const { email, password, fullName} = this.user

    this.firebaseauthService.saveUsers(newUser).then(() => {
      this.firebaseauthService.signUp(email, password, fullName)
      console.log("neuvo usuario agregado a la coleccion")
    }).catch( err => console.log("ha ocurrido un error:", err))

    this.user.email = ""
    this.user.fullName= ""
    this.user.password = ""
  }

}
