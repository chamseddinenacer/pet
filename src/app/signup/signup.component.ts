import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', './style.css']
})
export class SignupComponent implements OnInit {
  form: any = {
    username: null,
    last_name: null,
    email: null,
    first_name:null,
    password: null,
   
    
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  
  constructor(private route: ActivatedRoute, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {

   
  }

 
  ngOnInit(): void {
    

    if (this.tokenStorage.getToken()) {
      // if (this.tokenStorage.getUser().roles == 'ROLE_MEDECIN') {

      // } 
      this.router.navigate(['/']);

    }
    else{
      this.router.navigate(['auth/registre']);
    }
  }

  

  onSubmit(): void {
    const { username, last_name, email, first_name, password} = this.form;
    this.authService.register(username, last_name, email, first_name, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
    },

      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }



  reloadPage(): void {



  }
}