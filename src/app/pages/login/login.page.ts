import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../providers/login/login.service';

import { InspectTxtService } from '../../service/inspectTxt/inspect-txt.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { AlertService } from '../../service/alert/alert.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	user = {
		password:"",
		username:""
	}

  constructor(public loginService: LoginService, 
  			  public inspectTxt: InspectTxtService, 
  			  private router: Router,
  			  public alertService: AlertService) { }

  ngOnInit() {
  }

  login(){
	 
    if(this.inspectTxt.notNullValueLogin(this.user)){
		return;
	}
    this.loginService.login(this.user)
      .subscribe(data => {
        console.log(data);
        if(data.status >= 200 && data.status < 300){
        this.router.navigateByUrl('/menu/tabs');
	  	}
        this.alertService.presentAlert(data.message,"OK para continuar");
        
        },error => {
        this.alertService.presentAlert("Error de conexion","Intente mas tarde");
          console.log(error);
        });
		
  }

}
