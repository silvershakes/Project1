import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewComponent } from './review/review.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { SpiritualComponent } from './spiritual/spiritual.component';
import { EducationComponent } from './education/education.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { PoliticalComponent } from './political/political.component';
import { Edu1Component } from './edu1/edu1.component';
import { Edu2Component } from './edu2/edu2.component';
import { Enter1Component } from './enter1/enter1.component';
import { Enter2Component } from './enter2/enter2.component';
import { Enter3Component } from './enter3/enter3.component';
import { LifeComponent } from './life/life.component';
import { Life1Component } from './life1/life1.component';
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


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'feedback', component: FeedbackComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'review', component : ReviewComponent},
  {  path: 'entertainment',component : EntertainmentComponent},
  {  path: 'lifestyle', component : LifestyleComponent},
  { path: 'spiritual', component : SpiritualComponent},
  { path: 'education', component : EducationComponent},
  { path: 'sports' , component : SportsComponent},
  { path : 'technology', component : TechnologyComponent},
  { path : 'political' , component : PoliticalComponent},
  { path : 'edu1', component : Edu1Component},
  { path : 'edu2', component: Edu2Component},
  { path : 'enter1', component : Enter1Component},
  { path : 'enter2', component : Enter2Component},
  { path : 'enter3', component : Enter3Component},
  { path : 'life', component : LifeComponent},
  { path : 'life1', component : Life1Component},
  { path : 'spiritual1', component : Spiritual1Component},
  { path : 'spiritual2', component : Spiritual2Component},
  { path : 'header', component : HeaderComponent},
  { path : 'sport1', component : Sport1Component},
  { path : 'sport2', component : Sport2Component},
  { path : 'main', component : MainComponent  },
  { path : 'main2', component : Main2Component},
  { path : 'main3', component : Main3Component},
  { path : 'main4', component : Main4Component},
  { path : 'politic1', component : Politic1Component},
  { path : 'politic2', component : Politic2Component},
  { path : 'tech1', component : Tech1Component},
  { path : 'tech2', component : Tech2Component},
  { path : 'issue', component : IssueComponent },
  { path : 'work', component : WorkComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
