import { Component, OnInit } from '@angular/core';
import { Header } from '../classes/Header';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: Header;

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.getHeader();
  }

  getHeader(): void {
    this.resumeService.getHeader().subscribe(header => this.header = header);
  }
}
