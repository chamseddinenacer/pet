import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Animauxlost } from 'src/app/models/animauxlost.model';
import { User } from 'src/app/models/user.model';
import { Animaux } from 'src/app/models/animaux.model';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.css', './style.css']
})
export class AnimauxComponent implements OnInit {

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
  isLoginFailed = false;
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
  // animauxlost: Animauxlost ;
  addrs: any;
  users!: User;
  displayCount: number = 2;
  idPet: any;
  animaux!: Animaux;

  constructor(private http: HttpClient, private route: ActivatedRoute, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {


  }




  ngOnInit(): void {
    this.users = new User();
    this.animaux = new Animaux();

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




    }

    this.idPet = this.route.snapshot.params['id'];
    this.authService.getAnimauxbyid(this.idPet)
      .subscribe(data => {
        this.animaux = data;

        console.log(data.useridan);
        this.authService.getUserbyidanimaux(data.useridan)
          .subscribe(data => {
            this.users = data;
            this.users.id

            this.http.get<any>('https://adoption.pythonanywhere.com/images/' + this.users.id + '/')
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


            console.log(this.users);
          }, error => console.log(error));













        console.log(this.animaux);
      }, error => console.log(error));

  }




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