import { Component } from '@angular/core';
import { SideMenu } from "../../components/side-menu/side-menu";
import { Navbar } from "../../components/navbar/navbar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [SideMenu, Navbar, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
