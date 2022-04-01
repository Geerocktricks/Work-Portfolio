import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { portfolioArray } from '../../../myportfolios/my-portfolios';
import { Portfolio } from 'src/app/interfaces/portfolio';


@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {

  portfolio!: Portfolio | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const portfolioTitleFormRoute = routeParams.get('portfolioTitle');

    this.portfolio = portfolioArray.find(portfolio => portfolio.title === portfolioTitleFormRoute);
  }

}
