import { Component, OnInit } from '@angular/core';
import { Summary } from '../classes/Summary';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summary: Summary;

  // sectionHeading = 'Summary';

  // balticTalentsTemplate = `<a href="https://bit.lt/" target="_blank">Baltic Talents</a>`;

  // // tslint:disable-next-line: max-line-length
  // sectionParagraph = `<p>I\'m just a Junior developer just starting out. Passionate about the field and eager to learn new technology. At the start of the year of 2019 got into a programming course in ${this.balticTalentsTemplate}. Finished them in summer. I was able to get Internship at Dogo where I learned basics of Swift and iOS development, I was able to release an app that is slowly gaining traction and it’s attracting people to use the main app of Dogo. My internship is over and I’m looking for new opportunities.</p>`;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getSummary();
  }

  getSummary(): void {
    this.resumeService.getSummary().subscribe(summary => this.summary = summary);
  }
}
