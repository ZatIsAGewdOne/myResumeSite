import { ISection } from './ISection';

export class MyExperience implements ISection {

    sectionHeading: string;
    typeOfWork: string;
    company: string;
    startDate: Date;
    endDate: Date;
    tasks: string[];
}