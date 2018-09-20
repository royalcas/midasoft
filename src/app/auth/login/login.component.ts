import { AuthenticationService } from './../../core/services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faCoffee = faPlus;
  companias = [
    {
      code: 'CM',
      name: 'CM-COMERCIAL'
    }
  ];

  loginForm = new FormGroup({
    companyId: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  wrongCredentials = false;

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngOnInit() {}

  alert(message: string) {
    alert(message);
  }

  login() {
    this.loginForm.get('username');
    this.authService.login(this.loginForm.value)
    .subscribe(() => {
      this.wrongCredentials = false;
      this.router.navigate(['/organizacional']);
    });
  }
}
