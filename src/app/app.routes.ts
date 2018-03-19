import {Routes, RouterModule, Router} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {componentFactoryName} from '@angular/compiler';
import {TodoComponent} from './todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'login',
    component:LoginComponent
  }

];

export const routing = RouterModule.forRoot(routes);
