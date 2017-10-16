import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  registered = false;

  constructor(private router: Router) { }
  ngOnInit() {}

  register(form) {
    this.registered = true;
    form.reset();
  }
}
