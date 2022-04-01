import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './modules/angular-materials/angular-materials.module';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TruncatePostsPipe } from './pipes/truncate-posts.pipe';
import { PortfolioDetailsComponent } from './components/portfolio/portfolio-details/portfolio-details.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MentoringSessionComponent } from './components/mentoring-session/mentoring-session.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    PageNotFoundComponent,
    TruncatePostsPipe,
    PortfolioDetailsComponent,
    ContactFormComponent,
    MentoringSessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
