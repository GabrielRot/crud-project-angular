import { Component, QueryList, ViewChildren } from '@angular/core';
import { TechnoInput } from "../../../components/inputs/techno-input/techno-input";
import { TechnoButton } from "../../../components/buttons/techno-button/techno-button";
import { FormsModule } from '@angular/forms';
import { SignInService } from '../../../core/services/sign-in.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-sign-in',
  imports: [TechnoInput, TechnoButton, FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {
  constructor( private router: Router, private signInService: SignInService, private notify: NotificationService) {}

  @ViewChildren(TechnoInput) inputs!: QueryList<TechnoInput>;

  makeLogin() {
    let hasValidInput: boolean = true;

    for(const input of this.inputs) {
      if (!input.validateField()) hasValidInput = false;
    }

    if (!hasValidInput) return;

    const values = this.inputs.toArray().map((input) => input.getInputValue().toString());

    const email    = values[0];
    const password = values[1];

    let jsonData: {"email": string, "password": string};

    jsonData = {
      "email": email,
      "password": password
    };

    this.signInService.signIn(jsonData).subscribe({
      next: (res) => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        if (err.status == 401) {
          this.notify.show({ "icon": "fa-warning", "type": "error", "title": "Erro ao fazer login", "message": "E-mail ou senha inválido" });
        } else {
          this.notify.show({ "icon": "fa-warning", "type": "error", "title": "Erro ao fazer login", "message": "Ocorreu um erro interno. Tente novamente mais tarde" });
        }
      }
    })
  }

  signUp() {
    this.router.navigate(['sign-up']);
  }

}
