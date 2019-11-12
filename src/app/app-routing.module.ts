import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent, NavigationComponent, ProfessionalExperienceComponent, SummaryComponent, CoreSkillsComponent } from './components';

const routes: Routes = [
  { path: 'myResume',
      children: [
        { path: 'header', component: HeaderComponent },
        { path: 'profession-experience', component: ProfessionalExperienceComponent },
        { path: 'summary', component: SummaryComponent },
        { path: 'core-skills', component: CoreSkillsComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
