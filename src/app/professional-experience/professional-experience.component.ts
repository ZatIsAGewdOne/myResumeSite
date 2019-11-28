import { Component, OnInit } from '@angular/core';
import { MyExperience } from '../classes/MyExperience';
import { ResumeService } from '../resume.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements OnInit {

  myExperience: MyExperience[];

  constructor(private resumeService: ResumeService, private location: Location) { }

  ngOnInit() {
    this.getMyExperience();
  }

  getMyExperience(): void {
    this.resumeService.getMyExperience().subscribe(myExp => this.myExperience = myExp);
  }

  goBack(): void {
    this.location.back();
  }
}
