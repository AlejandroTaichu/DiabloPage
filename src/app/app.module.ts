import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Component importları
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from './history/history.component';
import { LilithComponent } from './lilith/lilith.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { Route, RouterModule, Routes } from '@angular/router';

//Routing AppRoutes ile
const appRoute:Routes=[
  //{path:'', component:HomepageComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'homepage', component:HomepageComponent},
  {path:'history', component:HistoryComponent},
  {path:'lilith', component:LilithComponent},
  {path:'abouth', component:AboutComponent}
]

//componentlar

@NgModule({
  declarations: [
    HistoryComponent,
    LilithComponent,
    AboutComponent,
    AppComponent,
    HomepageComponent,
    ContactComponent,
    NavBarComponent,
    HeroComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
