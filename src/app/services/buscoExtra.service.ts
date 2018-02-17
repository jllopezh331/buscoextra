import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class BuscoExtraService{
 
    constructor( private http: HttpClient ){

    };
 
    getImages(): Observable<any> {
        return this.http.get('./assets/imgData.json');
    };

}