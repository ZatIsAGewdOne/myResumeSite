import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent, ContactMeComponent, ProfessionalExperienceComponent, SummaryComponent, CoreSkillsComponent } from './components';

const routes: Routes = [
  // { path: 'myResume',
  //     children: [
  //       { path: 'header', component: HeaderComponent },
  //       { path: 'profession-experience', component: ProfessionalExperienceComponent },
  //       { path: 'summary', component: SummaryComponent },
  //       { path: 'core-skills', component: CoreSkillsComponent }
  //     ]
  // }
  { path: '', redirectTo: '/header', pathMatch: 'full'},
  { path: 'header', component: HeaderComponent },
  { path: 'contacts', component: ContactMeComponent },
  { path: 'core-skills', component: CoreSkillsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'professional-experience', component: ProfessionalExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
