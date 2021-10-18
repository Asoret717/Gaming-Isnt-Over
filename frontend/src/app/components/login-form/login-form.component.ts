import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }
  get errorCtr() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      if(this.myForm.value.username=="admin" && this.myForm.value.password=="1234"){
        this.myForm.reset();
        this.router.navigateByUrl("/admin");
      }else{
        this.presentAlert();
      }
    }
  }
  async presentAlert() {
    const alert = this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Wrong password or username',
      cssClass: 'AlertCSS',
      message: "Try again",
      buttons: ['Ok']
    });
    (await alert).present();
  }

}
