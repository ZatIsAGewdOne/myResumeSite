import { Component, OnInit } from '@angular/core';
import { MyExperience } from '../classes/MyExperience';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements OnInit {

  myExperience: MyExperience[];

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getMyExperience();
  }

  getMyExperience(): void {
    this.resumeService.getMyExperience().subscribe(myExp => this.myExperience = myExp);
  }
}
