import { Component } from '@angular/core';
import { Register } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  register: Register = {
    name: "",
    email: "",
    pwd: ""
  }

  onRegister(data: any){
    console.log(data.value);
  }

}
