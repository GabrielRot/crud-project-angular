import { NotificationService } from './../../../core/services/notification.service';
import { FormsModule } from '@angular/forms';
import { SignUpService } from './../../../core/services/sign-up.service';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { TechnoInput } from "../../../components/inputs/techno-input/techno-input";
import { TechnoButton } from '../../../components/buttons/techno-button/techno-button';
import { Technocard } from "../../../components/cards/technocard/technocard";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [TechnoInput, TechnoButton, Technocard],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  constructor(
    private signUpService: SignUpService,
    private notify: NotificationService,
    private router: Router
  ){}

  @ViewChildren(TechnoInput) inputs!: QueryList<TechnoInput>;

  cadastrar() {
     let hasValidInput: boolean = true;

     for(const input of this.inputs){
      if (!input.validateField()) hasValidInput = false;
     }

     if (!hasValidInput) return;

     const values = this.inputs.toArray().map((input) => input.getInputValue().toString());

     const name     = values[0];
     const email    = values[1];
     const password = values[2];

     let jsonData:{"name": string, "email": string, "password": string};

     jsonData ={
      "name": name,
      "email": email,
      "password": password
     };

     this.signUpService.signUp(jsonData).subscribe({
      next: (res) => {
        this.router.navigate(['']);
      },
      error: (error) => {
        console.error(error);

        this.notify.show({
          icon: 'fa-warning',
          type: 'error',
          title: 'Falha ao cadastra usuário',
          message: 'Ocorreu um erro inesperado ao cadastrar registro'
        });
      }
     })

  }

  redirectToLogin() {
    this.router.navigate(['']);
  }
}
