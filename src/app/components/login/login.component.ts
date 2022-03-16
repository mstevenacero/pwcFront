import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login={
    name:"",
    password:""
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  singIn(){
    console.log("login",this.login);
    let name = this.login.name
    let pass = this.login.password
    if(name=="pwc" && pass=="12345" ){
      this.router.navigateByUrl('usuario');
    }else{
      window.alert("Usuario no existe")
    }
  }

}
