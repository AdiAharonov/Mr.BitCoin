import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public userName = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp = () => {
    UserService.signUp(this.userName)
    this.router.navigateByUrl('/')
    console.log(this.userName)
  }

}
