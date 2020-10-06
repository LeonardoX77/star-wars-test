import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  register(xxx) {
    if (this.form.valid) {
      debugger;
      const vm: User = this.form.value as User;

      this.authenticationService.register(vm)
        .subscribe(response => {
          if (response.success) {
              this.router.navigate(['/login']);
          } else {
              this.errorMessage = response.message;
          }
      });
    }
  }
}
