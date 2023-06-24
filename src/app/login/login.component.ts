import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './style.css']

})
export class LoginComponent implements OnInit {


  form: any = {
    username: null,
    password: null,



  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  prenom?: string;

  aa: any;
  ee: any;
  gv: any;
  qq: any;
  constructor(private route: ActivatedRoute, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {


  }

 


  ngOnInit(): void {

    
    if (this.tokenStorage.getToken()) {
      // if (this.tokenStorage.getUser().roles == 'ROLE_MEDECIN') {

      // } 
      this.router.navigate(['/']);


      this.ee = this.tokenStorage.getUser().user.email
      console.log(this.ee)

      // this.authService.getuserAPI().subscribe(data => {
      //   console.log(data)
      //   this.aa = data;

      // }, error => console.log(error));


    }
    else{
      this.router.navigate(['auth/login']);
       }

 




  }


  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

  

  }




  reloadPage(): void {
  window.location.reload();
    // this.router.navigate(['auth/registre']);
  }



  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   window.location.reload();
  // } 



}

