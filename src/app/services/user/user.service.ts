import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public name: string;
  
  constructor() {
    this.name = '';
  }
}
