import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css','./style.css']
})
export class AccountComponent implements OnInit {

  imageUrl: any;
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
  eee: any;
  eeee: any;
  eeeee: any;
  e: any;

  dbImage: any;
  postResponse: any;
  idu: any;
  selectedImage: any;
  deleted?:boolean
  fileSelected: boolean = false;

  constructor(private http: HttpClient,private route: ActivatedRoute, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {


  }




  ngOnInit(): void {


    if (!this.tokenStorage.getToken()) {
      // if (this.tokenStorage.getUser().roles == 'ROLE_MEDECIN') {

      // } 
      this.router.navigate(['auth/login']);


    }
    else {
      this.e = this.tokenStorage.getUser() 
      console.log(this.e)

      this.ee = this.tokenStorage.getUser().user.last_name
      console.log(this.ee)
      this.eee = this.tokenStorage.getUser().user.email
      console.log(this.eee)
      this.eeee = this.tokenStorage.getUser().user.username
      console.log(this.eeee)
      this.eeeee = this.tokenStorage.getUser().user.first_name
      console.log(this.eeeee)
      this.idu = this.tokenStorage.getUser().user.id
      console.log(this.idu)
 
  
      
      this.http.get<any>('https://adoption.pythonanywhere.com/images/' + this.idu +'/')
      .subscribe(
        response => {
          if (response && response.image) {
            this.imageUrl = 'data:image/png;base64,' + response.image;
          } else {
            console.log('Invalid response format:', response);
          }
        },
        error => {
          console.log('An error occurred:', error);
        }
      );
      
    }
 
  }



  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
    // this.fileSelected = true;
  }

  deleteImage() {
    this.idu = this.tokenStorage.getUser().user.id
    // console.log(this.idu)
    // const idimageU = this.idu

    this.http.delete('https://adoption.pythonanywhere.com/delimage/' + this.idu +'/')
      .subscribe(
        () => {
          console.log('Image deleted successfully');
          this.deleted =true
        },
        error => {
          console.log('An error occurred:', error);
          this.deleted = false
        }
      );
  }

  uploadImage() {
    this.fileSelected = true;
    if (!this.selectedImage) {
      console.log('No image selected.');
      return;
    }
    this.deleteImage()
 
    this.idu = this.tokenStorage.getUser().user.id
    console.log(this.idu)

    const formData = new FormData();
    formData.append('image', this.selectedImage);
    formData.append('idimage', this.idu);
    
    this.deleteImage()
    this.http.post<any>('https://adoption.pythonanywhere.com/images/', formData)
      .subscribe(
        response => {
          console.log('Image uploaded successfully:', response);
          this.reloadPage()
        },
        error => {
          console.log('An error occurred:', error);
        }
      );

      
  }

  











  


  // onSubmit(): void {
  //   const { username, password } = this.form;
  //   this.authService.login(username, password).subscribe(
  //     data => {
  //       this.tokenStorage.saveToken(data.accessToken);
  //       this.tokenStorage.saveUser(data);
  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.reloadPage();

  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   );



  // }




  reloadPage(): void {
    window.location.reload();
    // this.router.navigate(['auth/registre']);
  }



  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   window.location.reload();
  // } 



}

