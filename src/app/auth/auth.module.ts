import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
]

@NgModule({
        declarations: [
                LoginComponent,
                RegisterComponent,
        ],
        imports: [
                RouterModule.forChild(routes),
                FormsModule,
                CommonModule,
        ],
        providers: [
                AuthService
        ],
        bootstrap: []
})
export class AuthModule { }
