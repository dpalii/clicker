import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit {

  public nameControl = new FormControl('', Validators.required);

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.nameControl.setValue(this.userService.name ? this.userService.name : '');
  }

  onSubmit() {
    if (this.nameControl.valid) {
      this.userService.name = this.nameControl.value;
      this.router.navigateByUrl('/clicker');
    }
  }

}
