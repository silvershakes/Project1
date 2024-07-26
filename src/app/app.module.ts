import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewComponent } from './review/review.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HttpClientModule } from '@angular/common/http';
import { SportsComponent } from './sports/sports.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { PoliticalComponent } from './political/political.component';
import { TechnologyComponent } from './technology/technology.component';
import { EducationComponent } from './education/education.component';
import { SpiritualComponent } from './spiritual/spiritual.component';
import { Edu1Component } from './edu1/edu1.component';
import { Edu2Component } from './edu2/edu2.component';
import { Enter1Component } from './enter1/enter1.component';
import { Enter2Component } from './enter2/enter2.component';
import { Enter3Component } from './enter3/enter3.component';
import { Life1Component } from './life1/life1.component';
import { LifeComponent } from './life/life.component';
import { Spiritual1Component } from './spiritual1/spiritual1.component';
import { Spiritual2Component } from './spiritual2/spiritual2.component';
import { HeaderComponent } from './header/header.component';
import { Sport1Component } from './sport1/sport1.component';
import { Sport2Component } from './sport2/sport2.component';
import { MainComponent } from './main/main.component';
import { Main2Component } from './main2/main2.component';
import { Main3Component } from './main3/main3.component';
import { Main4Component } from './main4/main4.component';
import { Politic1Component } from './politic1/politic1.component';
import { Politic2Component } from './politic2/politic2.component';
import { Tech1Component } from './tech1/tech1.component';
import { Tech2Component } from './tech2/tech2.component';
import { IssueComponent } from './issue/issue.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    AboutComponent,
    ContactComponent,
    ReviewComponent,
    FeedbackComponent,
    EntertainmentComponent,
    SportsComponent,
    LifestyleComponent,
    PoliticalComponent,
    TechnologyComponent,
    EducationComponent,
    SpiritualComponent,
    Edu1Component,
    Edu2Component,
    Enter1Component,
    Enter2Component,
    Enter3Component,
    Life1Component,
    LifeComponent,
    Spiritual1Component,
    Spiritual2Component,
    HeaderComponent,
    Sport1Component,
    Sport2Component,
    MainComponent,
    Main2Component,
    Main3Component,
    Main4Component,
    Politic1Component,
    Politic2Component,
    Tech1Component,
    Tech2Component,
    IssueComponent,
    WorkComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
