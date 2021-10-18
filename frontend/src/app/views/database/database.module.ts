import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatabasePageRoutingModule } from './database-routing.module';

import { DatabasePage } from './database.page';
import { MainMenuComponent } from 'src/app/components/main-menu/main-menu.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { DatabaseTableComponent } from 'src/app/components/database-table/database-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatabasePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DatabasePage,MainMenuComponent,FooterComponent,DatabaseTableComponent]
})
export class DatabasePageModule {}
