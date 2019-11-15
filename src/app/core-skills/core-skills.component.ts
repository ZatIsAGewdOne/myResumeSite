import { Component, OnInit } from '@angular/core';
import { CoreSkill } from '../classes/CoreSkill';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-core-skills',
  template: `
  <section *ngIf="coreSkill" class="section-core-skills">
  <div *ngFor="let coreSkill of coreSkill">
    <h2>{{coreSkill.sectionHeading | uppercase}}</h2>
    <div class="section-container">
        <ngx-typed-js [strings]="coreSkill.skills" [typeSpeed]="20" [backSpeed]="10" [backDelay]="10000" [showCursor]="false" [loop]="true">
          <div class="typing"></div>
        </ngx-typed-js>
    </div>
  </div>
  </section>`,
  // templateUrl: './core-skills.component.html',
  styleUrls: ['./core-skills.component.scss']
})
export class CoreSkillsComponent implements OnInit {

  coreSkill: CoreSkill[];

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getCoreSkills();
  }

  getCoreSkills(): void {
    this.resumeService.getCoreSkills().subscribe(skills => this.coreSkill = skills);
  }

}
