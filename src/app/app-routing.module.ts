import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { VerifyPasswordComponent } from './verify-password/verify-password.component';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './listing/pet/pet.component';
import { PetSiComponent } from './SinglePg/pet-si/pet-si.component';
import { ShelterComponent } from './SinglePg/shelter/shelter.component';
import { LostComponent } from './SinglePg/lost/lost.component';
import { DogComponent } from './listing/dog/dog.component';
import { DogSearchComponent } from './listing/dog-search/dog-search.component';
import { FoundPetComponent } from './listing/found-pet/found-pet.component';
import { LostPetComponent } from './listing/lost-pet/lost-pet.component';
import { AccountComponent } from './Account/account/account.component';
import { EditComponent } from './Account/edit/edit.component';
import { FavoritePetComponent } from './Account/favorite-pet/favorite-pet.component';
import { AccoFoundPetComponent } from './Account/acco-found-pet/acco-found-pet.component';
import { AccoLostPetComponent } from './Account/acco-lost-pet/acco-lost-pet.component';
import { FoundComponent } from './SinglePg/found/found.component';
import { AnimauxComponent } from './SinglePg/animaux/animaux.component';
import { TestMultiimageComponent } from './test-multiimage/test-multiimage.component';
 

  
const routes: Routes = [

  
  { path: 'mult', component: TestMultiimageComponent },  




  { path: 'auth/login', component:LoginComponent },
  { path: 'auth/registre', component:SignupComponent },
  { path: 'auth/Forget-Password', component: ForgotPassComponent }, 
  { path: 'auth/verify-Password', component: VerifyPasswordComponent }, 

  { path: '', component: HomeComponent },  

 
  { path: 'Single-Page/Lost/:id', component: LostComponent },
  { path: 'Single-Page/Found/:id', component: FoundComponent },
  { path: 'Single-Page/Pet/:id', component: AnimauxComponent },


 
  { path: 'Single-Page/Shelter', component: ShelterComponent }, //maaaaazeeelll
  
  { path: 'Single-Page/pet', component: PetSiComponent }, //meme
  { path: 'listing/pet', component: PetComponent }, // meme
  { path: 'listing/dog', component: DogComponent }, // meme

  { path: 'listing/Search', component: DogSearchComponent }, 
  { path: 'listing/found-Pet', component: FoundPetComponent },
  { path: 'listing/Lost-Pet', component: LostPetComponent },

  { path: 'Account', component: AccountComponent },
  { path: 'Account/edit', component: EditComponent },
  { path: 'Account/found-Pet', component:AccoFoundPetComponent },
  { path: 'Account/lost-Pet', component: AccoLostPetComponent },
  { path: 'Account/favorite-Pet', component: FavoritePetComponent }, 
 
 


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}