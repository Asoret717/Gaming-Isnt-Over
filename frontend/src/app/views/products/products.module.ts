import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { MainMenuComponent } from 'src/app/components/main-menu/main-menu.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { DatabaseSearchComponent } from 'src/app/components/database-search/database-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    CommonModule
  ],
  declarations: [ProductsPage,MainMenuComponent,FooterComponent,DatabaseSearchComponent]
})
export class ProductsPageModule {}
