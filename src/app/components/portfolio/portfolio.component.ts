import { Component, OnInit } from '@angular/core';

import { portfolioArray } from '../../myportfolios/my-portfolios';
import { Portfolio } from 'src/app/interfaces/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Portfolio[] = portfolioArray;

  all():void {
    this.projects = portfolioArray;
    console.log(this.projects)
  }
  javascript(): void {
    this.projects = portfolioArray.filter((e)=> e.tag === 'javascript');
    console.log(this.projects)
  }
  angular(): void {
    this.projects = portfolioArray.filter((e)=> e.tag === 'angular');
    console.log(this.projects)

  }
  python(): void {
    this.projects = portfolioArray.filter((e)=> e.tag === 'python');
    console.log(this.projects)

  }
  flask(): void {
    this.projects = portfolioArray.filter((e)=> e.tag === 'flask');
    console.log(this.projects)

  }
  django(): void {
    this.projects = portfolioArray.filter((e)=> e.tag === 'django');
    console.log(this.projects)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
