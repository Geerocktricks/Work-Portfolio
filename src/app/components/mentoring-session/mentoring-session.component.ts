import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentoring-session',
  templateUrl: './mentoring-session.component.html',
  styleUrls: ['./mentoring-session.component.scss']
})
export class MentoringSessionComponent implements OnInit {
  displayForm: boolean = false;
  text: string = 'Book Now'

  constructor() { }

  ngOnInit(): void {
  }
  displayFormFunction(): void {
    this.displayForm = !this.displayForm;
    if(this.displayForm) {
      this.text = 'Close Form'
    } else {
      this.text = 'Book Now';
    }
  }

}
