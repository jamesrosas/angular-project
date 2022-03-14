import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

  constructor(private angularFireAuth: AngularFireAuth, private Firestore: AngularFirestore, private router: Router) { 
    
  }

  saveUsers(user: any): Promise<any> {
    return this.Firestore.collection("usersregister").add(user)
  }

  getUsersList(): Observable<any> {
    return this.Firestore.collection('usersregister', ref => ref.orderBy('fullName', 'asc')).snapshotChanges()
            // se trae coleccion de documentos ordenados alfabeticamente de la A - Z
  }

  async signIn(email:string, password:string){
    try{
      return await this.angularFireAuth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log("ha ocurrido un error:", error)
      return null
    }
  }

  async signUp (email:string, password:string, fullName:string){
    try {
      await this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(()=> {
        alert("usuario registrado exitosamente")
      })
      console.log("este es el nombre completo", fullName)
    } catch (error) {
      console.log("error en registro:", error)
    }
  }

  signOut () {
    this.angularFireAuth.signOut()
    this.router.navigate(["/"])
  }

}
