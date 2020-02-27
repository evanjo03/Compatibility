import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder) {}
  
  userForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    roomCode: ['', Validators.required]
  })

  


}
