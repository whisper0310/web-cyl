import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div xmlns="http://www.w3.org/1999/html">
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
          <input required type="text"
                 name="username"
                 [(ngModel)]="username"
                 #usernameRef="ngModel"
                 minlength="3"
                 placeholder="enter username"
          />

          <div *ngIf="usernameRef?.errors?.required">this is required</div>
          <div *ngIf="usernameRef?.errors?.required">it should be at least 3 characters</div>
          <!--为true时显示该div-->

          <input required type="password"
                 name="password"
                 [(ngModel)]="password"
                 #passwordRef="ngModel"
                 minlength="3"
                 placeholder="enter password"
          />
          <div *ngIf="passwordRef?.errors?.required">this is required</div>
          <div *ngIf="passwordRef?.errors?.required">it should be at least 3 characters</div>


          <!--数据双向绑定：html对应空间的状态改变会反射设置到组件的model中-->
          
          <button type="submit">Submit</button>
        </fieldset>
      </form>
  `,
  styles: [`
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }
  `]


})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(@Inject('auth') private service) {
  }

  ngOnInit() {
  }

  onSubmit(formValue) {
    console.log('auth result is:'+ this.service.loginWithCredentials(formValue.login.username,formValue.login.password));
  }

}


