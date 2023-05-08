import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  constructor(private routerService: RouterService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  validateUser() {
    if (this.email === "james@gmail.com") {
      this.authService.login();
      this.routerService.navigateToNotesView();
    }
  }

}
