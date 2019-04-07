import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';


@Injectable({
  providedIn: 'root'
})
export class InspectTxtService {

  constructor(public alertService: AlertService) { }



public notNullValueLogin(json) {
        let username = json.username , password = json.password;
        if(username == '' && password == ''){
            this.alertService.presentAlert('A ocuarrido un error',' Debes de llenar todos los campos');
            return true;
        }
        else if(json.username == ''){
            this.alertService.presentAlert('Se deben de rellenar todos los campo','Te a faltado el nombre de usuario');
            return true;
        }
        else if(json.password == ''){
            this.alertService.presentAlert('Se deben de rellenar todos los campos','Te a faltado la contraseña');
            return true;
        }
    }

public notNullValueSignup(json){
    let username = json.username, 
        name = json.name,
        lastname = json.lastname,
        ci = json.ci,
        email = json.email,
        password = json.password,
        confirPassword = json.confirPassword;

console.log(json);
    if(username == '' || name == '' || lastname == '' || ci == '' || email == '' || password == '' || confirPassword == ''){
       this.alertService.presentAlert('Ha avido un error', 'Por favor llene todos los campos')
       return true;
    } 
    else if(password != confirPassword){
      this.alertService.presentAlert('Las contraseñas ingresadas no coinciden', 'Intende de nuevo');
      return true;
    }
        

    }

    public notNullValueDetailsProduct(json){
         let name_product = json.name_product , description = json.description;
        if(name_product == '' || description == '' ){
            this.alertService.presentAlert('A ocuarrido un error',' Debes de llenar todos los campos');
            return true;
        }
       
    }


}
