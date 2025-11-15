import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-techno-input',
  imports: [],
  templateUrl: './techno-input.html',
  styleUrl: './techno-input.scss',
})
export class TechnoInput {
  @Input() type:        string = '';
  @Input() id:          string = '';
  @Input() name:        string = '';
  @Input() placeholder: string = '';
  @Input() text:        string = '';
}
