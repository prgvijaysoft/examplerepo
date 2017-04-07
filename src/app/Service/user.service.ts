import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../Model/user.model';

@Injectable()
export class UserService{
    baseUrl: string = "";
    headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http){}

    addNewUser(user: User): Observable<User[]>{       
        return this.http.post(this.baseUrl +'', JSON.stringify(user), this.headers)
        .map(response => response.json().data as User[] );
    }

    assignRole(userName: string, role:string): Observable<User>{
        return null;
    }

    getUsers(): Observable<User[]>{
        return this.http.get(this.baseUrl +'')
        .map(response => response.json().data as User[]);
    }

    getUsersByRole(role: string): Observable<User[]>{
        return this.http.get(this.baseUrl +'')
        .map(response => response.json().data as User[]);
    }

    getUser(userName: string): Observable<User>{
        return this.http.get(this.baseUrl + '' + userName)
        .map(response => response.json().data as User);
    }

    authenticate(userName: string, password: string): Observable<User>{
        return this.http.get(this.baseUrl + '' + userName + '' + password)
        .map(response => response.json().data as User);
    }
} 
