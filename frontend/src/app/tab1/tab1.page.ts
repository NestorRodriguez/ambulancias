import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../Services/login/login.service';
//import { Storage } from '@ionic/storage';
//import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  
  userForm =
  {
    nameuser : String,
    password : String,
  };

  constructor(
    public navCtrl: NavController,
    //private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private loginService: LoginService,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {

  }

  async login(forma: NgForm)
  {
    if (forma.valid) {
      const loading = await this.loadingCtrl.create({
        message: 'Validando...',
        spinner: 'bubbles'
      });
      loading.present();
      this.userForm.nameuser = forma.value.nameuser;
      this.userForm.password = forma.value.password;
      let dataa = await this.loginService.login(this.userForm)
          .then(async (data: any) => {
            loading.dismiss();
            if(data==null)
            {
              let toast = await this.toastCtrl.create({
                message: 'Usuario o contraseña incorrecta.',
                duration: 3000,
                position: "middle"
              });
              toast.present();
            }
            else
            {
              let loginValid = false;
              let rol;
              data.forEach(function (value) {
                if(value.nameuser === forma.value.nameuser && value.password === forma.value.password)
                {//this.storage.set('userData', JSON.stringify(data));
                  loginValid = true;
                  if(value.id_rol === 1){
                    rol = 1;
                  }
                  else if (value.id_rol === 2){
                  rol = 2;
                  } 
                  else if (value.id_rol === 3){
                    rol = 3;
                    } 
                }
              });
              if(loginValid && rol === 1){
                this.navCtrl.navigateRoot('tab4');
              }
              else if(loginValid && rol === 2){
                this.navCtrl.navigateRoot('tabs/tab3');
              }
              else if(loginValid && rol === 3){
                this.navCtrl.navigateRoot('tabs/tab2');
              }
              else
              {
                let toast = await this.toastCtrl.create({
                  message: 'Usuario o contraseña incorrecta.',
                  duration: 3000,
                  position: "middle"
                });
                toast.present();
              }    
            }
        });
    }
  }

}
