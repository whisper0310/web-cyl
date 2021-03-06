import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './core/auth.service';
import { routing } from './app.routes';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [{
    provide:'auth', useClass:AuthService
  //  provide后面是服务的名称， 课直接引用， useclass指明这个名称对应的服务是一个类
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
