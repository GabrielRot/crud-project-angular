import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-techno-input',
  imports: [FormsModule, NgIf],
  templateUrl: './techno-input.html',
  styleUrl: './techno-input.scss',
})
export class TechnoInput {
  @ViewChild('technoInput') technoInput!: ElementRef<HTMLInputElement>;

  @Input() type:        string = '';
  @Input() id:          string = '';
  @Input() name:        string = '';
  @Input() placeholder: string = '';
  @Input() text:        string = '';

  @Input() requiredInput?: boolean = false;

  @Input() inputValue: string = '';

  getInputValue() {
    return this.inputValue;
  }

  showRequiredText: boolean = false;

  validateField(): boolean {
    const removeRequiredStyle = (_event: any) => {
      if (_event.target.value.trim() !== '') {
        this.technoInput.nativeElement.classList.remove('input-not-filled');

        this.showRequiredText = false;

        this.technoInput.nativeElement.removeEventListener('keyup', removeRequiredStyle);
      }
    }

    if (this.requiredInput && String(this.inputValue).replace(/\s/g, '') == '') {
      this.technoInput.nativeElement.classList.add('input-not-filled');

      this.showRequiredText = true;
      
      this.technoInput.nativeElement.addEventListener('keyup', removeRequiredStyle);

      return false;
    }

    return true;
  }
}
