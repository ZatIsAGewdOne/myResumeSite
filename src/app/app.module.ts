import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SummaryComponent } from './summary/summary.component';
import { CoreSkillsComponent } from './core-skills/core-skills.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { InMemoryDataService } from './in-memory-data.service';
import { LoggingService } from './log/logging.service';
import { LogPublishersService } from './log/log-publishers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SummaryComponent,
    CoreSkillsComponent,
    ProfessionalExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [LoggingService, LogPublishersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
