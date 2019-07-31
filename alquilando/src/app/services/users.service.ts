import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable, throwError } from 'rxjs';
//import { retry, catchError } from 'rxjs/Operator'
//import { Usuario } from '../usuario' //interface

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = 'https://reqres.in/api/users'

  constructor() { }
}
