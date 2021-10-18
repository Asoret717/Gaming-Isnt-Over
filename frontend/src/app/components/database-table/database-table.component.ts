import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technology } from 'src/app/models/technology';
import { GamingService } from 'src/app/services/gaming.service';

@Component({
  selector: 'app-database-table',
  templateUrl: './database-table.component.html',
  styleUrls: ['./database-table.component.scss'],
})
export class DatabaseTableComponent implements OnInit {

  public gaming: Array<Technology> = []; 
 
  constructor(private router: Router, private technologyService: GamingService) {}

  ngOnInit(): void {
    this.loadInfo();
  }
  loadInfo(){
    this.technologyService.getGaming().subscribe((b: Array<Technology>) => {
      this.gaming = b;
    })
  }
  ionViewWillEnter(){
    this.loadInfo();
  }
}
