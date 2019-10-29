import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logMessages: string[] = [];

  add(log: string) {
    this.logMessages.push(log);
  }

  clear() {
    this.logMessages = [];
  }
}
