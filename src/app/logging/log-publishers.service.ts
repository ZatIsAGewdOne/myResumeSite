import { Injectable } from '@angular/core';
import { LogPublisher } from './LogPublisher';
import { LogConsole } from './LogConsole';
import { LogLocalStorage } from './LogLocalStorage';

@Injectable({
  providedIn: 'root'
})
export class LogPublishersService {

  constructor() {
    this.buildPublishers();
  }

  publishers: LogPublisher[] = [];

  buildPublishers(): void {
    this.publishers.push(new LogConsole());

    this.publishers.push(new LogLocalStorage());
  }
}
