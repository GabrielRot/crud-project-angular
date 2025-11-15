import { Component } from '@angular/core';
import { TechnoInput } from "../../../components/inputs/techno-input/techno-input";
import { TechnoButton } from "../../../components/buttons/techno-button/techno-button";

@Component({
  selector: 'app-sign-in',
  imports: [TechnoInput, TechnoButton],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {

}
