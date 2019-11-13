import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const resume = [
      {
        menus: [
          {
              menuTitle: 'About me', 
              menuLink: '/summary'
          },
          {
              menuTitle: 'Contacts', 
              menuLink: '/contacts'
          },
          {
              menuTitle: 'Projects', 
              menuLink: '/professional-experience'
          },
          {
              menuTitle: 'Education', 
              menuLink: '/core-skills'
          }
        ],

        header: {
          sectionHeading: 'Hello',
          headerText: `<h1>My name is <br> Edvardas</h1>`
        },

        summary: {
          sectionHeading: 'Summary',
          summaryText: `<p>I\'m just a Junior developer just starting out. Passionate about the field and eager to learn new technology. At the start of the year of 2019 got into a programming course in <a href="https://bit.lt/" target="_blank">Baltic Talents</a>. Finished them in summer. I was able to get Internship at Dogo where I learned basics of Swift and iOS development, I was able to release an app that is slowly gaining traction and it’s attracting people to use the main app of Dogo. My internship is over and I’m looking for new opportunities.</p>`
        },

        coreSkills: {
          sectionHeading: 'Core skills',
          skills: [
            'Javascript: OK at it. Been learning angular lately, which is what I\'m using for this page. Considering to use NodeJS more, if I can\'t get anything to work using Java',
            'Swift: Relatively new at it. Had to learn it during my internship at Dogo. Developed my first iOS app and my first app just in general.',
            'Java: Once again \u2014 some necessary basics that I\'ve picked up during my stay at Baltic Talents. Was taught necessary skills to help develop Web applications. Haven\'t made anything with it yet. But used core ideas of Object-Oriented programming with other languages that use OOP'
          ]
        },

        myExperience: {
          sectionHeading: 'Professional Experience (so far...)',
          typeOfWork: 'Intern',
          company: 'UG Dogo',
          startDate: new Date('July, 2019'),
          endDate: new Date('October, 2019'),
          tasks: [
              `Developed companion apps for the main application to help advertise the main application and get more users to use the main application. (e.g <a href="https://apps.apple.com/app/dogo-dog-whistle-training/id1477041576?l=en" target="_blank">Dogo Whistle</a>)`,
              `Learned new technologies and applied them to help speed up development of applications for Apple related accessories. (<a href="https://apps.google.com/us/app/dog-training-clicker-by-dogo/id1153294767#?platform=iphone" target="_blank">Watch app</a> using SwiftUI)`,
              `Made changes to the main application based off of feedback according to the project lead and users.`,
              `Go through test cases and make bug reports to help speed up release of newer versions of applications.`
          ]
        }
      }
    ];
    
    const menus = [
      {
        menuTitle: 'About me', 
        menuLink: '/summary'
      },
      {
          menuTitle: 'Contacts', 
          menuLink: '#'
      },
      {
          menuTitle: 'Experience', 
          menuLink: '/professional-experience'
      },
      {
          menuTitle: 'Core Skills', 
          menuLink: '/core-skills'
      }
  ];
  
    const header = [
      {
        sectionHeading: 'Hello',
        headerText: `<h1>My name is <br> Edvardas</h1>`
      }
    ];
    
    const summary = [
      {
        sectionHeading: 'Summary',
        summaryText: `<p>I\'m just a Junior developer just starting out. Passionate about the field and eager to learn new technology. At the start of the year of 2019 got into a programming course in <a href="https://bit.lt/" target="_blank">Baltic Talents</a>. Finished them in summer. I was able to get Internship at Dogo where I learned basics of Swift and iOS development, I was able to release an app that is slowly gaining traction and it’s attracting people to use the main app of Dogo. My internship is over and I’m looking for new opportunities.</p>`
      }
    ];

    const coreSkills = [
      {
        sectionHeading: 'Core skills',
        skills: [
          'Javascript: OK at it. Been learning angular lately, which is what I\'m using for this page. Considering to use NodeJS more, if I can\'t get anything to work using Java',
          'Swift: Relatively new at it. Had to learn it during my internship at Dogo. Developed my first iOS app and my first app just in general.',
          'Java: Once again \u2014 some necessary basics that I\'ve picked up during my stay at Baltic Talents. Was taught necessary skills to help develop Web applications. Haven\'t made anything with it yet. But used core ideas of Object-Oriented programming with other languages that use OOP'
        ]
      }
    ]
    
    const myExperience = [
      {
    
        sectionHeading: 'Professional Experience (so far...)',
        typeOfWork: 'Intern',
        company: 'UG Dogo',
        startDate: new Date('July, 2019'),
        endDate: new Date('October, 2019'),
        tasks: [
            `Developed companion apps for the main application to help advertise the main application and get more users to use the main application. (e.g <a href="https://apps.apple.com/app/dogo-dog-whistle-training/id1477041576?l=en" target="_blank">Dogo Whistle</a>)`,
            `Learned new technologies and applied them to help speed up development of applications for Apple related accessories. (<a href="https://apps.google.com/us/app/dog-training-clicker-by-dogo/id1153294767#?platform=iphone" target="_blank">Watch app</a> using SwiftUI)`,
            `Made changes to the main application based off of feedback according to the project lead and users.`,
            `Go through test cases and make bug reports to help speed up release of newer versions of applications.`
        ]
      }
    ];

    return {header, menus, summary, coreSkills, myExperience, resume};
  }
}
