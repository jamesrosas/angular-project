import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../services/firebaseauth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  userList: any[] = []
  
  constructor(private firebaseauthService: FirebaseauthService, private router: Router) { }

  ngOnInit(): void{ 
    this.getUsers()
  }

  getUsers(){
    this.firebaseauthService.getUsersList().subscribe( dta => {
      this.userList = []
      dta.forEach((el:any) => {
        console.log(el.payload.doc.data())
        this.userList.push({
          ...el.payload.doc.data()
        }) 
        console.log("userList:",this.userList)
      });
    })
  }

  handleLogOut(){
    this.firebaseauthService.signOut()
  }

}
