import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({  
  templateUrl: '../View/login.component.html'
})
export class LoginComponent  {
   userName: string;
   password: string;
   rememberMe: boolean;

   authenticate(): void{

   }    
}