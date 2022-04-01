import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav/sidenav-module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened: boolean = false;

  @ViewChild('sidenav')
  sidenav!: MatSidenavModule;
  navMode: string = 'side';


  ngOnInit(): void {
    if(window.innerWidth > 768) {
      this.opened = false;
    }
  }

  @HostListener('window: resize', ['$event'])
    onResize(event: { target: { innerWidth: number; }; }) {
      if (event.target.innerWidth > 768) {
        this.opened = false;
      }

    }
}
