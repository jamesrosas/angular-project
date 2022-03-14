import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule} from '@angular/fire/compat/firestore'

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UsersDataComponent } from './users-data/users-data.component';

const firebaseConfig = {
  apiKey: "AIzaSyD5ScUJRzAJ5uCm0AEjdJ8owR0TEgn82gc",
  authDomain: "angular-firebase-3d0ff.firebaseapp.com",
  projectId: "angular-firebase-3d0ff",
  storageBucket: "angular-firebase-3d0ff.appspot.com",
  messagingSenderId: "952670039046",
  appId: "1:952670039046:web:89e3da9e0d6b63d21ce787"
};
// no hay problema en que estas credenciales esten visibles , ya que desde la consola de firebase se establecen los dominios que pueden hacer uso de ellas. entre ellos el localHost por su puesto.

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomePageComponent,
    RegisterFormComponent,
    UsersDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
