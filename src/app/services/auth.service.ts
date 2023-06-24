import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animauxlost } from '../models/animauxlost.model';
import { Animauxfound } from '../models/animauxfound.model';
import { Animaux } from '../models/animaux.model';
// import { Role } from '../models/role.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
                          'Authorization': 'Bearer ${accessToken}'



}) 

};
const httppp = {
  headers: new HttpHeaders({
   
    'Authorization': 'Bearer ${accessToken}'   })

};

@Injectable({
  providedIn: 'root'
})


export class AuthService {
   
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(environment.api +'/login/', {
      username,
      password
    }, httpOptions);
  }

 

  getuserAPI(): Observable<any> {
    return this.http.get(environment.api + '/user/', httppp) as Observable<any>;
  } 

  logo(): Observable<any> {
    return this.http.get(environment.api + '/logout/') as Observable<any>;
  } 


  register(username: string, last_name: string, email: string, first_name:string, password:string): Observable<any> {
    return this.http.post(environment.api +'/register/', {
      username,
      last_name,
      email,
      first_name,
      password,
      
     
     
    }, httpOptions);
  }


  UpdateUser(idu: number, username: string, last_name: string, email: string, first_name: string, password:string): Observable<any> {
    return this.http.put(environment.api + '/editUser/' + idu+"/", {
      username,
      last_name,
      email,
      first_name,
      password,
    }, httpOptions);
  }

 

  getimagebyidimage(idimage: number): Observable<any> {
    return this.http.get(environment.api + '/images/' + idimage);
  }






  animauxlostPost(userlost: string, name: string, bred: string, size: string, species: string, age: string,
    descri: string,
    couleur: string,
    gender: string,
    distmarkings: string,
    image: any,
    datelost: string,
    addrs: string ): Observable<any> {
    return this.http.post(environment.api + '/AnimauxlostList/', {
      userlost,
      name,
      bred,
      size,
      species,
      age,
      descri,
      couleur,
      gender,
      distmarkings,
      image,
      datelost,
      addrs,

    }, httpOptions);
  }





  getAnimauxlostList(): Observable<Animauxlost[]> {
    return this.http.get(environment.api + '/AnimauxlostList/') as Observable<Animauxlost[]>;
  }

  getAnimauxfoundList(): Observable<Animauxfound[]> {
    return this.http.get(environment.api + '/AnimauxfoundList/') as Observable<Animauxfound[]>;
  }


  getAnimauxList(): Observable<Animaux[]> {
    return this.http.get(environment.api + '/AnimauxList/') as Observable<Animaux[]>;
  }

  getAnimauxlostbyid(id: number): Observable<any> {
    return this.http.get(environment.api + '/AnimauxlostDetail/' + id + '/');
  }


  getAnimauxfoundbyid(id: number): Observable<any> {
    return this.http.get(environment.api + '/AnimauxfoundDetail/' + id + '/');
  }


  getUserbyidanimaux(id: number): Observable<any> {
    return this.http.get(environment.api + '/users/' + id + '/');
  }


 


  getfavoriteListByidUser(st: any): Observable<any> {
    return this.http.get(environment.api + '/FavoriteByidUser/' + st + '/');
  }


  getFavoritesByUserIdAndAnimId(userid: string, animid: string) {
    const url = environment.api + `/FavoriteByidUserAndAnimid/?userid=${userid}&animid=${animid}`;
    return this.http.get(url);
  }

  getFavoritesByUserIdAndAnimId2(userid: string, animid: string): Observable<any> {
    return this.http.get(environment.api + `/FavoriteByidUserAndAnimid/?userid=${userid}&animid=${animid}`);
  }

  getAnimauxbyid(id: number): Observable<any> {
    return this.http.get(environment.api + '/AnimauxList/' + id + '/');
  }

  createFavorite(favorite: Object): Observable<Object> {
    return this.http.post(environment.api + '/FavoriteList/', favorite);
  }

  DeleteFavoritesByUserIdAndAnimId2(userid: string, animid: string): Observable<any> {
    return this.http.delete(environment.api + `/FavoriteByidUserAndAnimid/?userid=${userid}&animid=${animid}`, { responseType: 'text' });
  }

  // passwordReset(txt: any): Observable<Object> {
  //   return this.http.post(environment.api + '/password_reset/', txt);
  // }

  getAnimauxbyAddres(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxListser/?addrs=' + st);
  }

  getAnimauxbyName(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxListser/?name=' + st);
  }


  getAnimauxbyBreed(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxListser/?bred=' + st);
  }

  getAnimauxbySize(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxListser/?size=' + st);
  }

  getAnimauxbyAge(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxListser/?age=' + st);
  }


// FOUND FILTER


  // getAnimauxfoundbyName(st: any): Observable<any> {
  //   return this.http.get(environment.api + '/AnimauxfoundListser/?name=' + st);
  // }

  getAnimauxfoundbyAddres(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxfoundListser/?addrs=' + st);
  }
  getAnimauxfoundbyBreed(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxfoundListser/?bred=' + st);
  }

  getAnimauxfoundbySize(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxfoundListser/?size=' + st);
  }

  getAnimauxfoundbyAge(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxfoundListser/?age=' + st);
  }


  // LOST FILTER

  getAnimauxlostbyAddres(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxlostListser/?addrs=' + st);
  }

  getAnimauxlostbyName(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxlostListser/?name=' + st);
  }


  getAnimauxlostbyBreed(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxlostListser/?bred=' + st);
  }

  getAnimauxlostbySize(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxlostListser/?size=' + st);
  }

  getAnimauxlostbyAge(st: any): Observable<any> {
    return this.http.get(environment.api + '/AnimauxlostListser/?age=' + st);
  }

  










  // loginEtabliss(username: string, password: string): Observable<any> {
  //   return this.http.post(environment.api + '/signinEtabliss', {
  //     username,
  //     password

  //   }, httpOptions);
  // }


  // registerEtabliss(username: string, email: string, password: string,tel:string,gouvernorat:string,delegation:string,dateOvert:Date,typeActivite:String,idRole:number): Observable<any> {
  //   return this.http.post(environment.api+'/signupEtabliss', {
  //     username,
  //     email,
  //     password,
  //     tel,
  //     gouvernorat,
  //     delegation,
  //     dateOvert,
  //     typeActivite,
  //     idRole,
     
  //   }, httpOptions);
  // }












  // registerEpmloyy(username: string, email: string, password: string,adresse:string,prenom:string,tel:string,dateNais:Date,sexe:string,idRole:Number,salair:number,idspec:number): Observable<any> {
  //   return this.http.post(environment.api+'/signup', {
  //     username,
  //     email,
  //     password,
  //     adresse,
  //     prenom,
  //     tel,
  //     dateNais,
  //     sexe,
  //     idRole,
  //     salair,
  //     idspec,

  //   }, httpOptions);
  // }










  // registerMedecin(username: string, email: string, password: string,adresse:string,prenom:string,tel:string,dateNais:Date,sexe:string,idRole:Number): Observable<any> {
  //   return this.http.post(environment.api+'/signupMedecin', {
  //     username,
  //     email,
  //     password,
  //     adresse,
  //     prenom,
  //     tel,
  //     dateNais,
  //     sexe,
  //     idRole,
  //   }, httpOptions);
  // }

  // getAllRole(): Observable<Role[]> {
  //   return this.http.get(environment.api+'/getAllRole') as Observable<Role[]>;
  // }


}