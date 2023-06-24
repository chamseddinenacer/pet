import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-test-multiimage',
  templateUrl: './test-multiimage.component.html',
  styleUrls: ['./test-multiimage.component.css']
})
export class TestMultiimageComponent implements OnInit {

  imageUrl: any;


  userfound: any;
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
  tt: any;




  images: File[] = [];

  form: any = {

    name: null,
    size: null,

    datefound: null,



  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {


  }




  ngOnInit(): void {




  }




  onFileSelected(event: any): void {
    const selectedFiles = event.target.files;
    if (selectedFiles.length > 5) {
      // Limit the number of images to 5
      alert('Please select a maximum of 5 images.');
      return;
    }
    this.images = Array.from(selectedFiles);
  }


  onSubmit(): void {
    const formData = new FormData();
    const { datelost, name } = this.form;

    formData.append('name', name);
    formData.append('age', "12");
    formData.append('datelost', datelost);


    // formData.append('image', selectedFiles);

    formData.append('bred', "dsdsdsdd");
    formData.append('size', "dsdsdsdd");
    formData.append('species', "dsdsdsdd");

    formData.append('descri', "dsdsdsdd");
    formData.append('couleur', "dsdsdsdd");
    formData.append('gender', "dsdsdsdd");
    formData.append('distmarkings', "dsdsdsdd");

    formData.append('addrs', "dsdsdsdd");
    formData.append('userlost', "1");











    for (let i = 0; i < this.images.length; i++) {
      formData.append('image', this.images[i]);
    }

    this.http.post('http://127.0.0.1:8000/api/AnimauxlostList/', formData)
      .subscribe(
        () => {
          // Handle success response
          console.log('Animal and images uploaded successfully');
        },
        (error) => {
          // Handle error response
          console.error('Error uploading animal and images:', error);
        }
      );
  }














}


