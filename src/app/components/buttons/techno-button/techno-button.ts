import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-techno-button',
  imports: [],
  templateUrl: './techno-button.html',
  styleUrl: './techno-button.scss',
})
export class TechnoButton {
  @Input() text: string = '';
  
}
