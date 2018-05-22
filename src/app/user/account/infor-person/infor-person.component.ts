import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Location } from '@angular/common';

import { UserService } from '../../../core/services/user.service';
import { AlertService } from '../../../core/services/alert.services';
import { Users } from '../../../core/models/user';

@Component({
  selector: 'app-infor-person',
  templateUrl: './infor-person.component.html',
  styleUrls: ['./infor-person.component.css']
})
export class InforPersonComponent implements OnInit {
  inforPersonForm: FormGroup;
  currentUser = new Users;
  message: any;

  constructor(
    public formBuilder: FormBuilder, public userService: UserService, public alertService: AlertService,
    public location: Location
  ) { }

  ngOnInit() {
    this.initForm();
    this.getUserInfor();
  }

  getUserInfor() {
    this.userService.getUserInfor()
      .subscribe(
        response => {
          this.currentUser = Object.keys(response).map(key => (response)[key])[1];
          console.log(this.currentUser);
        });
  }

  updateUser() {
    const newUser = new Users();
    newUser.name = this.inforPersonForm.value.name;
    newUser.email = this.inforPersonForm.value.email;
    newUser.phone_number = this.inforPersonForm.value.phone_number;
    newUser.country_code = this.inforPersonForm.value.country_code;

    this.userService.updateUser(newUser)
      .subscribe(response => console.log(response));
  }
  onSubmit() {
    if (this.inforPersonForm.valid) {
      this.updateUser();
    }
  }
  goBack() {
    this.location.back();
  }
  initForm() {
    this.inforPersonForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      email: this.formBuilder.control('', [Validators.required, Validators.minLength(12), Validators.email]),
      phone_number: this.formBuilder.control('', [Validators.required]),
      country_code: this.formBuilder.control('', [Validators.required])
    });
  }
}
