import { Component, OnInit } from '@angular/core';
import { CoreSkill } from './CoreSkill';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-core-skills',
  templateUrl: './core-skills.component.html',
  styleUrls: ['./core-skills.component.scss']
})
export class CoreSkillsComponent implements OnInit {

  // skills: CoreSkill[] = [
  //   {
  //     name: 'Javascript',
  //     // tslint:disable-next-line: max-line-length
  //     description: 'OK at it. Been learning angular lately, which is what I\'m using for this page. Considering to use NodeJS more, if I can\'t get anything to work using Java'
  //   },

  //   {
  //     name: 'Swift',
  //     // tslint:disable-next-line: max-line-length
  //     description: 'Relatively new at it. Had to learn it during my internship at Dogo. Developed my first iOS app and my first app just in general.'
  //   },

  //   {
  //     name: 'Java',
  //     // tslint:disable-next-line: max-line-length
  //     description: 'Once again \u2014 some necessary basics that I\'ve picked up during my stay at Baltic Talents. Was taught necessary skills to help develop Web applications. Haven\'t made anything with it yet. But used core ideas of Object-Oriented programming with other languages that use OOP'
  //   }
  // ];

  sectionHeading = 'Core skills';

  constructor() { }

  ngOnInit() {
    const options: TypedOptions = {
      // tslint:disable-next-line: max-line-length
      strings: ['<b>Javascript</b>: OK at it. Been learning angular lately, which is what I\'m using for this page. Considering to use NodeJS more, if I can\'t get anything to work using Java', '<b>Swift</b>: Relatively new at it. Had to learn it during my internship at Dogo. Developed my first iOS app and my first app just in general.', '<b>Java</b>: Once again \u2014 some necessary basics that I\'ve picked up during my stay at Baltic Talents. Was taught necessary skills to help develop Web applications. Haven\'t made anything with it yet. But used core ideas of Object-Oriented programming with other languages that use OOP'],
      typeSpeed: 20,
      backSpeed: 10,
      backDelay: 10000,
      showCursor: false,
      cursorChar: '|',
      loop: true
    };

    const typed: Typed = new Typed('.typed-goes-here', options);
  }

}
