import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SidebarMenuService {

  constructor(private http:Http) { }
//getMenu(){return "Hi"}
  getMenu():Observable<any>{
    return this.http.get('app/api/sidemenu.json')
    .map((res)=>{
      console.log(res.json());
      return res.json();
    })
    .catch((err)=>{
      console.log(err);
      return err.json();
    })
  }
}
