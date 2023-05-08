import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Keep Note';
  @Input()
  loggedIn: boolean = false;
  constructor(private authService: AuthService, private routerService: RouterService) { }

  ngOnInit(): void {

  }

  logout() {
    console.log(this.loggedIn);
    this.authService.logout();
    this.loggedIn = this.authService.isLoggedIn;
    console.log("after looed out"+this.loggedIn);
    this.routerService.toLogin();
  }

}
