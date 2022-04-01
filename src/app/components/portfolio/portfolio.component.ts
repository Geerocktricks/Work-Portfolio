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

  constructor() { }

  ngOnInit(): void {
  }

}
