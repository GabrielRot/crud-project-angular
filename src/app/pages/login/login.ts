import { Component } from '@angular/core';
import { SignIn } from "./sign-in/sign-in";
import { Technocard } from "../../components/cards/technocard/technocard";

@Component({
  selector: 'app-login',
  imports: [SignIn, Technocard],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
