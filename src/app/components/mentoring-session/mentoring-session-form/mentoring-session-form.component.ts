import { Component, OnInit } from '@angular/core';
import { MetoringUsers } from '../../../mentoring-users';


@Component({
  selector: 'app-mentoring-session-form',
  templateUrl: './mentoring-session-form.component.html',
  styleUrls: ['./mentoring-session-form.component.scss']
})
export class MentoringSessionFormComponent implements OnInit {

  topics = ['Javascript', 'Angular2+', 'NodeJs', 'Express'];

  mentoringUser = new MetoringUsers('', '', '' , 'default','', '',false);
  topicHasError: boolean = true;

  today = new Date().toDateString()
  

  constructor() {
    console.log(this.today)
   }

  ngOnInit(): void {
  }

  validateTopic(value: string): void {
    if(value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    console.log(this.mentoringUser)
    alert('Succesfully sumited')
  }

}
