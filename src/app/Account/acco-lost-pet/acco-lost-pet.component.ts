import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-acco-lost-pet',
  templateUrl: './acco-lost-pet.component.html',
  styleUrls: ['./acco-lost-pet.component.css','./style.css']
})
export class AccoLostPetComponent implements OnInit {

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
  prenom ?: string;

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
  deleted ?: boolean
  fileSelected: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {


  }




  ngOnInit(): void {


    if(!this.tokenStorage.getToken()) {
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

}


  onFileimage(event: any) {
    this.selectedImagepet = event.target.files[0];
     
  }
  onSubmit(): void {

     
    if (!this.selectedImagepet) {
      console.log('No image selected.');
      this.msgi = " Image is required"
      return;
    }
    // this.authService.animauxlostPost(this.userlost, name, bred, size, species, age, descri, couleur, gender, distmarkings, formData, datelost, addrs)
    const { name, bred, size, species, age, descri, couleur, gender, distmarkings, datelost, addrs } = this.form;
    this.idu = this.tokenStorage.getUser().user.id
    this.userlost = this.idu

    const formData = new FormData();
    formData.append('image', this.selectedImagepet);
    formData.append('userlost', this.idu);
    formData.append('name', name);
    formData.append('bred', bred);
    formData.append('size', size);
    formData.append('species', species);
    formData.append('age', age);
    formData.append('descri', descri);
    formData.append('couleur', couleur);
    formData.append('gender', gender);
    formData.append('distmarkings', distmarkings);
    formData.append('datelost', datelost);
    formData.append('addrs', addrs);
    
    this.http.post<any>('https://adoption.pythonanywhere.com/api/AnimauxlostList/', formData).subscribe(
      data => {
        console.log(data);
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
        // window.location.reload();
      },
 
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );



    const formData1 = new FormData();
    formData1.append('image', this.selectedImagepet);
    formData1.append('useridan', this.idu);
    formData1.append('name', name);
    formData1.append('bred', bred);
    formData1.append('size', size);
    formData1.append('species', species);
    formData1.append('age', age);
    formData1.append('descri', descri);
    formData1.append('couleur', couleur);
    formData1.append('gender', gender);
    formData1.append('distmarkings', distmarkings);
    formData1.append('daten', datelost);
    formData1.append('addrs', addrs);

    this.http.post<any>('https://adoption.pythonanywhere.com/api/AnimauxList/', formData1).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        // window.location.reload();
      },

      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );







 

   
    if (this.isSuccessful){
      window.location.reload();
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



  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   window.location.reload();
  // } 



}

