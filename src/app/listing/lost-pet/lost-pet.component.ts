import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Animauxlost } from 'src/app/models/animauxlost.model';

@Component({
  selector: 'app-lost-pet',
  templateUrl: './lost-pet.component.html',
  styleUrls: ['./lost-pet.component.css','./style.css']
})
export class LostPetComponent implements OnInit {

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
    addrs: null,
  };

  userlost: any;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  isLoggedIn = false;
  isdataIn = false;
  nondata = false;
  buttshow = false;

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
  allanimauxlost: Animauxlost[] = [];
  addrs:any;
  displayedItems: Animauxlost[] = [];
  displayCount: number = 2;
  nb: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {


  }




  ngOnInit(): void {


    // if (!this.tokenStorage.getToken()) {

    //   this.router.navigate(['auth/login']);


    // }
    if (this.tokenStorage.getToken()) {
      this.e = this.tokenStorage.getUser()

      this.isLoggedIn = true;
      this.ee = this.tokenStorage.getUser().user.last_name

      this.eee = this.tokenStorage.getUser().user.email

      this.eeee = this.tokenStorage.getUser().user.username

      this.eeeee = this.tokenStorage.getUser().user.first_name

      this.idu = this.tokenStorage.getUser().user.id




      // this.http.get<any>('http://127.0.0.1:8000/images/' + this.idu + '/')
      //   .subscribe(
      //     response => {
      //       if (response && response.image) {
      //         this.imageUrl = 'data:image/png;base64,' + response.image;
      //       } else {
      //         console.log('Invalid response format:', response);
      //       }
      //     },
      //     error => {
      //       console.log('An error occurred:', error);
      //     }
      //   );

    }


    this.authService.getAnimauxlostList()
      .subscribe(data => {
        this.allanimauxlost = data;
        console.log(this.allanimauxlost);
         this.displayedItems = this.allanimauxlost.slice(0, 3);
          this.nb = this.allanimauxlost.length
        if (this.allanimauxlost.length===0){
          this.nondata = true;
        }
        
      }); 
 
  }


  searchanimaux(): void {

    const { name } = this.form;

    this.authService.getAnimauxlostbyName(name)
      .subscribe(data => {

        this.allanimauxlost = data;
        // console.log(this.allanimauxlost);
        this.displayedItems = this.allanimauxlost;

        console.log(data);
      }, error => console.log(error));
    this.nb = this.allanimauxlost.length
    if (this.allanimauxlost.length === 0) {
      this.nondata = true;
    }
  }

  searchanimauxadd(): void {

    const { addrs } = this.form;




    this.authService.getAnimauxlostbyAddres(addrs)
      .subscribe(data => {

        this.allanimauxlost = data;
        // console.log(this.allanimauxlost);
        this.displayedItems = this.allanimauxlost;

        console.log(data);
      }, error => console.log(error));
    this.nb = this.allanimauxlost.length
    if (this.allanimauxlost.length === 0) {
      this.nondata = true;
    }
  }


  searchanimauxBreed(): void {

    const { bred } = this.form;

    this.authService.getAnimauxlostbyBreed(bred)
      .subscribe(data => {

        this.allanimauxlost = data;
        // console.log(this.allanimauxlost);
        this.displayedItems = this.allanimauxlost;

        console.log(data);
      }, error => console.log(error));
    this.nb = this.allanimauxlost.length
    if (this.allanimauxlost.length === 0) {
      this.nondata = true;
    }
  }


  searchanimauxSize(): void {

    const { size } = this.form;

    this.authService.getAnimauxlostbySize(size)
      .subscribe(data => {

        this.allanimauxlost = data;
        // console.log(this.allanimauxlost);
        this.displayedItems = this.allanimauxlost;

        console.log(data);
      }, error => console.log(error));
    this.nb = this.allanimauxlost.length
    if (this.allanimauxlost.length === 0) {
      this.nondata = true;
    }
  }



  searchanimauxAge(): void {

    const { age } = this.form;

    this.authService.getAnimauxlostbyAge(age)
      .subscribe(data => {

        this.allanimauxlost = data;
        // console.log(this.allanimauxlost);
        this.displayedItems = this.allanimauxlost;

        console.log(data);
      }, error => console.log(error));
    this.nb = this.allanimauxlost.length
    if (this.allanimauxlost.length === 0) {
      this.nondata = true;
    }
  }























  incrementDisplayCount() {
    if (this.displayCount === 2) {

      this.authService.getAnimauxlostList()
        .subscribe(data => {
          this.allanimauxlost = data;
          console.log(this.allanimauxlost);

          this.displayedItems = this.allanimauxlost;

          this.displayCount++
          // this.isdataIn = true;

        
          },
    err => {
      this.errorMessage = err.error.message;
      this.nondata = true;
    }
        
         
        );
    } else{

      this.authService.getAnimauxlostList()
        .subscribe(data => {
          this.allanimauxlost = data;
          console.log(this.allanimauxlost);

          this.displayedItems = this.allanimauxlost.slice(0, 3);
          this.displayCount--
        },
          err => {
            this.errorMessage = err.error.message;
            this.nondata = true;
          }
        
        
        );
    }
  }
  // showAllData() {
  //   this.displayedItems = this.allanimauxlost;
  //   this.buttshow=true
  // }


  onFileimage(event: any) {
    this.selectedImagepet = event.target.files[0];

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



















  reloadPage(): void {
    window.location.reload();
    // this.router.navigate(['auth/registre']);
  }


  logout(): void {
    this.router.navigate(['/']);
    this.tokenStorage.signOut();
    window.location.reload();


  }


}