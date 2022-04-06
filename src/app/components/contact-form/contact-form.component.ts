import { Component, OnInit } from '@angular/core';

import { ContactUser } from 'src/app/contact-user';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactUserModel = new ContactUser('','','','');

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.contactUserModel)
    alert('Succesfully sumited')
  }

}
