import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null,
  }

  submitted = false;

  constructor(private http: HttpClient, private route: Router) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
      const { username, password, firstName, lastName } = this.form

      console.log(this.form);

      this.http.post("https://localhost:7085/api/Login/register", this.form, {responseType:'text'}).subscribe(data => {
        this.submitted = true;
        this.route.navigate(['login']);
      });
    }


}


