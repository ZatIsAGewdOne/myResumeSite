import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Header } from '../classes/Header';
import { ResumeService } from '../resume.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('header') el: ElementRef;
  header: Header;

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.getHeader();
  }

  ngAfterViewInit() {
    let $header = $('#header');
    let $nav = $header.children('nav');
    let $nav_li = $nav.find('li');

    if ($nav_li.length % 2 == 0) {
      $nav.addClass('use-middle');
      $nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');
    }
  }

  getHeader(): void {
    this.resumeService.getHeader().subscribe(header => this.header = header);
  }
}
