import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MapDataService {

  constructor(private http:Http) { }

  getMap():Observable<any>{
    return this.http.get("app/api/worldmap.json")
    .map((res)=>res.json())
    .catch((err)=>err.json());
  }
}
