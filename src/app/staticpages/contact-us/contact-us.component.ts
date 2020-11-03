import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ContactusForm: FormGroup;
  name: string = "";
  email: string = "";
  phone: number;
  message: string = "";

  constructor(private frmbuilder: FormBuilder) {
    this.ContactusForm = frmbuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Phone : ['', Validators.required],
      Message: ['', [Validators.required, Validators.maxLength(30)]]
    })
    
  }
  postData(ContactusForm: any){
    this.name = ContactusForm.controls.Name.value;
    this.email = ContactusForm.controls.Email.value;
    this.phone = ContactusForm.controls.Phone.value;
    this.message = ContactusForm.controls.Message.value;

  }

  ngOnInit(): void {
  }

}
