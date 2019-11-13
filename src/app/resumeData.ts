import { Menu } from './classes/Menu';
import { Summary } from './classes/Summary';
import { MyExperience } from './classes/MyExperience';
import { Header } from './classes/Header';

export const MENUS: Menu[] = [
    {
        menuTitle: 'About me', 
        menuLink: '#'
    },
    {
        menuTitle: 'Contact me', 
        menuLink: '#'
    },
    {
        menuTitle: 'Projects', 
        menuLink: '#'
    },
    {
        menuTitle: 'Education', 
        menuLink: '#'
    }
];

export const HEADER: Header = {
    sectionHeading: 'Hello',
    headerText: `<h1>My name is <br> Edvardas</h1>`
}

export const SUMMARY: Summary = {
    sectionHeading: 'Summary',
    summaryText: `<p>I\'m just a Junior developer just starting out. Passionate about the field and eager to learn new technology. At the start of the year of 2019 got into a programming course in <a href="https://bit.lt/" target="_blank">Baltic Talents</a>. Finished them in summer. I was able to get Internship at Dogo where I learned basics of Swift and iOS development, I was able to release an app that is slowly gaining traction and it’s attracting people to use the main app of Dogo. My internship is over and I’m looking for new opportunities.</p>`
}

export const MYEXPERIENCE: MyExperience = {

    sectionHeading: 'Professional Experience (so far...)',
    typeOfWork: 'Intern',
    company: 'UG Dogo',
    startDate: new Date('July, 2019'),
    endDate: new Date('October, 2019'),
    tasks: [
        'Developed companion apps for the main application to help advertise the main application and get more users to use the main application',
        'Learned new technologies and applied them to help speed up development of applications for Apple related accessories.'
    ]
}