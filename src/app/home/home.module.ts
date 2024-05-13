import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import { ReactiveFormsModule } from '@angular/forms';


import { HomeRoutingModule } from './home-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormAddComponent } from './components/form-add/form-add.component';


@NgModule({
  declarations: [
    AddUserComponent,
    FormAddComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
