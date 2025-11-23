import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/services/auth.service';
import { Router } from '@angular/router';
import { PageTitleService } from '../../core/pages/services/page-title.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  navbarTitle: string = 'Home';

  constructor(private authService: AuthService, private router: Router, private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.title$.subscribe(title => {
      this.navbarTitle = title;
    });
  }

  logout() {
    this.authService.logout();

    this.router.navigate(['login']);
  }

}
