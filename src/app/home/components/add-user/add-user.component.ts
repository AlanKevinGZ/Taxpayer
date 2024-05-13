import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { TaxpayService } from '../../services/taxpay.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit {
  taxpayService = inject(TaxpayService);

  panelOpenState = false;
  taxPayers:any=[]; 
  isTax:boolean=false;

 
    constructor(){}

  ngOnInit(): void {
   this.taxpayService.getTaxpayUsers().subscribe((users:any)=>{
      
      this.taxPayers=users.data;
      console.log( this.taxPayers);
   })
  }


  onTaxpayerAdded(taxpayer: any) {
    this.taxPayers.unshift(taxpayer);
  }
 

}
