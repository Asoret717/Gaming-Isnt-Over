import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technology } from 'src/app/models/technology';
import { GamingService } from 'src/app/services/gaming.service';

@Component({
  selector: 'app-database-search',
  templateUrl: './database-search.component.html',
  styleUrls: ['./database-search.component.scss'],
})
export class DatabaseSearchComponent implements OnInit {

  public gaming: Array<Technology> = []; 
  productNumber:number=0;

  constructor( private router: Router, private technologyService: GamingService) {}

  ngOnInit(): void {
    this.loadInfo();
    this.technologyService.getSearchedProduct()
  }
  loadInfo(){
    this.technologyService.getGaming().subscribe((b: Array<Technology>) => {
      this.gaming = b;
    })
  }
  ionViewWillEnter(){
    this.loadInfo();
  }
  addProductNumber(){
    this.productNumber+=1;
  }
  productNumberZero(){
    if(this.productNumber==0){
      return true;
    }else{
      return false;
    }
  }
}
