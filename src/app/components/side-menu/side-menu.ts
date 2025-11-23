import { Component } from '@angular/core';
import { PageTitleService } from '../../core/pages/services/page-title.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
})
export class SideMenu {

  constructor(private pageTitleService: PageTitleService) {}

  setPage(title: string) {
    this.pageTitleService.setTitle(title);
  }

}
