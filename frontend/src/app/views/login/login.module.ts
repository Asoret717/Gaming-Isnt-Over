import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { MainMenuComponent } from 'src/app/components/main-menu/main-menu.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  declarations: [LoginPage,MainMenuComponent,FooterComponent,LoginFormComponent]
})
export class LoginPageModule {}
