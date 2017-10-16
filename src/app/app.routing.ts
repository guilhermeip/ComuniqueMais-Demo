import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'mensagem', component: MessageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
