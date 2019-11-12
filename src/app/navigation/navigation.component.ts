import { Component, OnInit } from '@angular/core';
import { Menu } from '../classes/Menu';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menus: Menu[];

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.getMenus();
  }

  getMenus(): void {
    this.resumeService.getMenus().subscribe(menus => this.menus = menus);
  }
}
