import { Component } from '@angular/core';
import { SignIn } from "./sign-in/sign-in";
import { Technocard } from "../../components/cards/technocard/technocard";
import { TechnoInput } from "../../components/inputs/techno-input/techno-input";

@Component({
  selector: 'app-login',
  imports: [SignIn, Technocard, TechnoInput],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
