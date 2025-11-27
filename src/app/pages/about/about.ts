import { NotificationService } from './../../core/services/notification.service';
import { Component } from '@angular/core';
import { Technocard } from "../../components/cards/technocard/technocard";

@Component({
  selector: 'app-about',
  imports: [Technocard],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  constructor(private notify: NotificationService) {}

  copyRA(event: Event) {
    const parent = event.currentTarget as HTMLElement;

    const ra: string = parent.querySelector('.RA-value')?.textContent?.trim().toString() || '';

    navigator.clipboard.writeText(ra);

    this.notify.show({
      type: "info",
      title: "Informação",
      message: "RA copiado com sucesso"
    });
  }

}
