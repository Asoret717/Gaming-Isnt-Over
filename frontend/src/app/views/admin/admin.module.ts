import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, MenuController } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SecondMenuComponent } from 'src/app/components/second-menu/second-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule
  ],
  declarations: [AdminPage,SecondMenuComponent,FooterComponent]
})
export class AdminPageModule {
  constructor() { }

}