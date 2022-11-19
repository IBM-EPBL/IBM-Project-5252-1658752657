import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidDetails = '';
  loding = false
  constructor(
    private fb: FormBuilder,
    private authServ: AuthService,
    private tokenserve: TokenService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }


  async login(): Promise<any> {
    try {
      this.loding = true;
      const data = await this.authServ.login(this.loginForm.value);
      console.log(data);
      if (!data.token) {
        window.alert('Failed to login');
        return;
      }
      const takenData = {
        token: data?.token,
        role: data?.ROLE,
      }
      this.tokenserve.saveToken(takenData);
      this.router.navigate(['/']);
      this.invalidDetails = '';
    } catch (error: any) {
      console.log(error);
      this.invalidDetails = error.error.message;
    }finally{
      this.loding = false
    }
  }

  ngOnInit(): void {
  }

}
