import { Component, OnInit } from '@angular/core';
import { CoreSkill } from '../classes/CoreSkill';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-core-skills',
  templateUrl: './core-skills.component.html',
  styleUrls: ['./core-skills.component.scss']
})
export class CoreSkillsComponent implements OnInit {

  coreSkill: CoreSkill;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getCoreSkills();
  }

  getCoreSkills(): void {
    this.resumeService.getCoreSkills().subscribe(skills => this.coreSkill = skills);
  }

}
