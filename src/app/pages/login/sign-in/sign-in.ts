import { Component, QueryList, ViewChildren } from '@angular/core';
import { TechnoInput } from "../../../components/inputs/techno-input/techno-input";
import { TechnoButton } from "../../../components/buttons/techno-button/techno-button";
import { FormsModule } from '@angular/forms';
import { SignInService } from '../../../core/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  imports: [TechnoInput, TechnoButton, FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {
  constructor(private signInService: SignInService) {}

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

    // this.signInService.signIn(jsonData).subscribe({
    //   next: (res) => {
    //     alert('teste');
    //   },
    //   error: (err) => {
    //     alert(err.message);
    //   }
    // })
  }

}
