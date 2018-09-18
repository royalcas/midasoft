import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit() {}

  alert(message: string) {
    alert(message);
  }
}
