import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { VerifyPasswordComponent } from './verify-password/verify-password.component';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './listing/pet/pet.component';
import { PetSiComponent } from './SinglePg/pet-si/pet-si.component';
import { ShelterComponent } from './SinglePg/shelter/shelter.component';
import { TestSingleComponent } from './test-single/test-single.component';
import { LostComponent } from './SinglePg/lost/lost.component';
import { DogComponent } from './listing/dog/dog.component';
import { DogSearchComponent } from './listing/dog-search/dog-search.component';
import { FoundPetComponent } from './listing/found-pet/found-pet.component';
import { LostPetComponent } from './listing/lost-pet/lost-pet.component';
import { AccountComponent } from './Account/account/account.component';
import { EditComponent } from './Account/edit/edit.component';
import { FavoritePetComponent } from './Account/favorite-pet/favorite-pet.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccoLostPetComponent } from './Account/acco-lost-pet/acco-lost-pet.component';
import { AccoFoundPetComponent } from './Account/acco-found-pet/acco-found-pet.component';
import { FoundComponent } from './SinglePg/found/found.component';
import { AnimauxComponent } from './SinglePg/animaux/animaux.component';
import { TestMultiimageComponent } from './test-multiimage/test-multiimage.component';


 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPassComponent,
    VerifyPasswordComponent,
    HomeComponent,
    PetComponent,
    PetSiComponent,
    ShelterComponent,
    TestSingleComponent,
    LostComponent,
    DogComponent,
    DogSearchComponent,
    FoundPetComponent,
    LostPetComponent,
    AccountComponent,
    EditComponent,
    FavoritePetComponent,
    AccoLostPetComponent,
    AccoFoundPetComponent,
    FoundComponent,
    AnimauxComponent,
    TestMultiimageComponent,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
