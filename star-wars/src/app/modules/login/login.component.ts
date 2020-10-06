import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  login() {
    if (this.form.valid) {
      const vm: User = this.form.value as User;

      this.authenticationService.login(vm.username, vm.password)
        .subscribe(response => {
          debugger;
          if (response.success) {
              this.authenticationService.setCredentials(vm);
              this.router.navigate(['/starships']);
          } else {
              this.errorMessage = response.message;
          }
      });
    }
  }
}
