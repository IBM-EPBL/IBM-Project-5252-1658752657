import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authServ: AuthService,
    private router: Router,
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  async signup(): Promise<any> {
    try {
      console.log('calling', this.signupForm.value);
      const data = await this.authServ.signup(this.signupForm.value);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
  }

}