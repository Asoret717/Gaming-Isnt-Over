import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseTableComponent } from 'src/app/components/database-table/database-table.component';
import { GamingService } from 'src/app/services/gaming.service';


@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})

export class DatabasePage implements OnInit {
  @ViewChild(DatabaseTableComponent) databaseTableComponent: DatabaseTableComponent;
  myForm: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder, private router: Router,
    private technologyService: GamingService) { }


  ngOnInit() {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ionViewWillEnter() {
    this.databaseTableComponent.ionViewWillEnter();
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
      this.technologyService.setSearchedProduct(this.myForm.value.username);
      this.myForm.reset();
      this.router.navigateByUrl("/products");
    }
  }
  buttonSearch(word: string){
    this.technologyService.setSearchedProduct(word);
      this.myForm.reset();
      this.router.navigateByUrl("/products");
  }
}

