import { Component, EventEmitter, Output, inject } from '@angular/core';
import { TaxpayService } from '../../services/taxpay.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.scss'
})
export class FormAddComponent {
  taxpayService = inject(TaxpayService);
  @Output() taxpayerAdded = new EventEmitter<any>();
  isTax:boolean=false;
  taxPayers:any=[]; 
  public TaxPayerForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      rfc: [''],
      address: ['', Validators.required],
     
    });

    constructor(private fb: FormBuilder){}
    
  addNewTaxpayer(){
    this.isTax=!this.isTax;
  }

  addTaxPayer(){
       this.taxpayService.postTaxpayUsers(this.TaxPayerForm.value).subscribe((value)=>{
        this.taxpayerAdded.emit(value);
        this.TaxPayerForm.reset();
        this.isTax=false;
      }) 
 
      
  }
}
