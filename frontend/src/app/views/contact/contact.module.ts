import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';
import { MainMenuComponent } from 'src/app/components/main-menu/main-menu.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

import { ContactPage } from './contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule
  ],
  declarations: [ContactPage,MainMenuComponent,FooterComponent]
})
export class ContactPageModule {}
