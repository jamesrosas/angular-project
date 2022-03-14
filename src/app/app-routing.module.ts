import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UsersDataComponent } from './users-data/users-data.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';


const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', component: HomePageComponent },
  { path: 'register', component: RegisterFormComponent},
  { path: 'users-data', component: UsersDataComponent, canActivate: [AngularFireAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
