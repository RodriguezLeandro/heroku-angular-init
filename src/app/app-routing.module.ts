import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CurriculumPageComponent } from './curriculum-page/curriculum-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'index', component: IndexComponent },
  { path: 'curriculum', component: CurriculumPageComponent},
  { path: 'portfolio', component: PortfolioComponent}]; 
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
