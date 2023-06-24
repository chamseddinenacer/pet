import { Component, OnInit } from '@angular/core';
 
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css','./style.css']
})
export class ForgotPassComponent implements OnInit {

  imageUrl: any;
  form: any = {



    name: null,
    bred: null,
    size: null,
    species: null,
    age: null,
    descri: null,
    couleur: null,
    gender: null,
    distmarkings: null,

    datelost: null,
    // daten: null,
    addrs: null,
  };

  userlost: any;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  isLoggedIn = false;
  isLoginFailed = false;

  roles: string[] = [];
  prenom?: string;

  aa: any;
  ee: any;
  gv: any;
  qq: any;
  eee: any;
  eeee: any;
  eeeee: any;
  e: any;
  msgi: any;
  dbImage: any;
  postResponse: any;
  idu: any;
  selectedImage: any;
  selectedImagepet: any;
  deleted?: boolean
  fileSelected: boolean = false;
  ss: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {


  }




  ngOnInit(): void {

  }






  onSubmit(): void {

    const { email} = this.form;
    const formData = new FormData();
    formData.append('email', email);
    

    this.http.post<any>('https://adoption.pythonanywhere.com/api/password_reset/', formData).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.ss = email
        // window.location.reload();
      },

      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );

    }
}
