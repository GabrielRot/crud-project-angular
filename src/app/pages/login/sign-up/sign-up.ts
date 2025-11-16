import { FormsModule } from '@angular/forms';
import { SignUpService } from './../../../core/services/sign-up.service';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { TechnoInput } from "../../../components/inputs/techno-input/techno-input";
import { TechnoButton } from '../../../components/buttons/techno-button/techno-button';

@Component({
  selector: 'app-sign-up',
  imports: [TechnoInput,TechnoButton],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  constructor(private signUpService: SignUpService ){}

  @ViewChildren(TechnoInput) inputs!: QueryList<TechnoInput>;

  cadastrar() {
     let hasValidInput: boolean = true;

     for(const input of this.inputs){
      if (!input.validateField()) hasValidInput = false;
     }

     if (!hasValidInput) return;

     const values = this.inputs.toArray().map((input) => input.getInputValue().toString());

     const name = values [0];
     const email = values [1];
     const password =values [2];

     let jsonData:{"name": string, "email": string, "password": string};

     jsonData ={
      "name": name,
      "email": email,
      "password": password
     };

  }
}
