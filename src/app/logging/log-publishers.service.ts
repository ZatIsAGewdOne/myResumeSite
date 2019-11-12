import { Injectable } from '@angular/core';
import { LogPublisher, LogPublisherConfig } from './LogPublisher';
import { LogConsole } from './LogConsole';
import { LogLocalStorage } from './LogLocalStorage';
import { Observable } from 'rxjs';

const PUBLISHERS_FILE = "/src/app/assets/log-publishers.json"

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

  // This might get used for logging to a json file
  // getLoggers(): Observable<LogPublisherConfig[]> {
  //   return this.http.get(PUBLISHERS_FILE).map(response => response.json()).catch(this.handleErrors);
  // }

  private handleErrors(error: any): Observable<any> {
    let errors: string[] = [];
    let msg: string = "";

    msg = `Status: ${error.status}`;
    msg += ` - Status Text: ${error.statusText}`;

    if (error.json()) {
      msg += ` - Exception Message: ${error.json().exceptionMessage}`;
    }

    errors.push(msg);

    console.error('An error has occurred', errors);

    return Observable.throw(errors);
  }
}
