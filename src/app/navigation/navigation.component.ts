import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Menu } from '../classes/Menu';
import { ResumeService } from '../resume.service';
import { ResumeWrapper } from '../classes/ResumeWrapper';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  menus: Menu[];

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.getMenus();
  }

  ngAfterViewInit() {
    this.loadExternalScript('../assets/vendor/js/main.js').then(() => {}).catch(() => {});
    this.loadExternalScript('../assets/vendor/js/util.js').then(() => {}).catch(() => {});
  }

  getMenus(): void {
    this.resumeService.getMenus().subscribe(menus => this.menus = menus);
  }

  loadExternalScript(scriptUrl: string) {
    return new Promise(resolve => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement)
    })
  }
}
