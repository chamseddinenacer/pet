import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Favorite } from 'src/app/models/favorite.model';
import { Animaux } from 'src/app/models/animaux.model';
import { Animauxlost } from 'src/app/models/animauxlost.model';
import { Animauxfound } from 'src/app/models/animauxfound.model';


@Component({
  selector: 'app-favorite-pet',
  templateUrl: './favorite-pet.component.html',
  styleUrls: ['./favorite-pet.component.css','./style.css']
})
export class FavoritePetComponent implements OnInit {

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
  deleted?: boolean
  fileSelected: boolean = false;
  favo:any[]=[];
  allfavorite: Favorite[] = [];
  animaux!: Animaux;
  animauxlost!: Animauxlost;
  animauxfound!: Animauxfound;
  animauxfounddata: Animauxfound[] = [];
  constructor(private http: HttpClient, private route: ActivatedRoute, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {


  }




  ngOnInit(): void {
    this.animaux = new Animaux();
    this.animauxlost = new Animauxlost();
    this.animauxfound = new Animauxfound();

    if (!this.tokenStorage.getToken()) {
      // if (this.tokenStorage.getUser().roles == 'ROLE_MEDECIN') {

      // } 
      this.router.navigate(['auth/login']);


    }
    else {
      this.e = this.tokenStorage.getUser()
     

      this.ee = this.tokenStorage.getUser().user.last_name
    
      this.eee = this.tokenStorage.getUser().user.email
    
      this.eeee = this.tokenStorage.getUser().user.username
     
      this.eeeee = this.tokenStorage.getUser().user.first_name
    
      this.idu = this.tokenStorage.getUser().user.id
      



      this.http.get<any>('https://adoption.pythonanywhere.com/images/' + this.idu + '/')
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

 
    const userid = this.idu;
    const animid = '12';
    this.authService.getFavoritesByUserIdAndAnimId(userid, animid).subscribe(
      (response) => {
        // Handle the response from the API
        console.log(response);
      },
      (error) => {
        // Handle errors
        console.error(error);
      }
    );


    
    this.authService.getfavoriteListByidUser(userid) 
      .subscribe(data => {
        this.allfavorite = data;
        // console.log(this.allfavorite);


        this.allfavorite.forEach(favorite => {
          // console.log(favorite.animid, favorite.userid);
           
           
           this.authService.getAnimauxfoundbyid(favorite.animid)
            .subscribe(data => {
               
              this.animauxfound = data;
              this.animauxfounddata = data;
              // console.log(this.animauxfounddata);

             
                this.favo.push(this.animauxfound)
                
 
              // console.log(this.favo);

            }, error => console.log(error));

 
          this.authService.getAnimauxlostbyid(favorite.animid)
            .subscribe(data => {
              this.animauxlost = data;
              // console.log(this.animauxlost);

              this.favo.push(this.animauxlost)

              // console.log(this.favo);

            }, error => console.log(error));








        });

 
      },
      (error) => {
        // Handle errors
        console.error(error);
      }
    );

















  }



  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
    // this.fileSelected = true;
  }

  deleteImage() {
    this.idu = this.tokenStorage.getUser().user.id
    // console.log(this.idu)
    // const idimageU = this.idu

    this.http.delete('https://adoption.pythonanywhere.com/delimage/' + this.idu + '/')
      .subscribe(
        () => {
          console.log('Image deleted successfully');
          this.deleted = true
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

