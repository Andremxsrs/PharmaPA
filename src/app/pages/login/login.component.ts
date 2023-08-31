import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Constructor other video
/*   constructor(private _login:LoginService) {

  } */

  //Constructor API Rest

  data: any= {};

  constructor(private loginServices: LoginService) {

  }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.loginServices.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }


  
  showRegisterForm: boolean = false;
  passwordStrength: string = ''; // Declaración de la propiedad passwordStrength

  toggleRegistration() {
    this.showRegisterForm = !this.showRegisterForm;
  }

  updatePasswordStrength() {
    const passwordInput = document.getElementById('login__password') as HTMLInputElement;
    const password = passwordInput.value;
    
    // Lógica para evaluar la fortaleza de la contraseña y asignar a this.passwordStrength
    if (password.length < 6) {
      this.passwordStrength = 'Débil';
    } else if (password.length < 10) {
      this.passwordStrength = 'Mediana';
    } else {
      this.passwordStrength = 'Fuerte';
    }
  }

  login() {
    
  }

  register() {
    // Lógica para el registro
  }
}
