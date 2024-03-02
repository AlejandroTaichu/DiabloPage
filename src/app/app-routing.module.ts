import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryComponent } from './history/history.component';
import { LilithComponent } from './lilith/lilith.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }, // Varsayılan sayfa
  { path: 'history', component: HistoryComponent },
  { path: 'lilith', component: LilithComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
