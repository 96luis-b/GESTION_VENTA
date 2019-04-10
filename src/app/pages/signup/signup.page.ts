import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../providers/signup/signup.service';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../service/alert/alert.service';
import { InspectTxtService } from '../../service/inspectTxt/inspect-txt.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	user = {
		username:"",
		name:"",
		lastaname:"",
		password:"",
		confirPassword:"",
		ci:null,
		email:""
		}

  constructor(private router: Router,
  			  public alertService: AlertService,
  			  public inspectTxt: InspectTxtService,
  			  public http: SignupService) { }

  ngOnInit() {
  }

signup(){

	if(this.inspectTxt.notNullValueSignup(this.user)){
		return;
	}
    this.http.signup(this.user)
      .subscribe(data => {
        console.log(data);
        if(data.status >= 200 && data.status < 300){
        this.router.navigateByUrl('/login-page');
	  	}
        this.alertService.presentAlert(data.message,"OK para continuar");
        
        },error => {
        this.alertService.presentAlert("Error de conexion","Intente mas tarde");
          console.log(error);
        });

}

}
