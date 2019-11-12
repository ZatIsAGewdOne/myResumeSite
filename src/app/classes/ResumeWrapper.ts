import { Header } from './Header';
import { CoreSkill } from './CoreSkill';
import { MyExperience } from './MyExperience';
import { Summary } from './Summary';
import { Menu } from './Menu';

export class ResumeWrapper {

    menus: Menu[];
    header: Header;
    coreSkill: CoreSkill;
    myExperience: MyExperience;
    summary: Summary;
}