import { Injectable } from '@angular/core';
import { LogLevel } from './LogLevel';
import { LogEntry } from './LogEntry';
import { LogPublishersService } from './log-publishers.service';
import { LogPublisher } from './LogPublisher';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logMessages: string[] = [];
  level: LogLevel = LogLevel.All;
  logWithDate: boolean = true;
  publishers: LogPublisher[];

  constructor(private publihersService: LogPublishersService) {
    this.publishers = this.publihersService.publishers;
  }

  log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.All, optionalParams);
  }

  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warn, optionalParams);
  }

  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error, optionalParams);
  }

  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams);
  }

  private writeToLog(msg: string, level: LogLevel, params: any[]) {
    if (this.shouldLog(level)) {
      let entry: LogEntry = new LogEntry();
      entry.message = msg;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;

      this.publishers.forEach(logger => logger.log(entry).subscribe(response => console.log(response)));
    }
  }

  private shouldLog(level: LogLevel): boolean {
    let ret: boolean = false;

    if ((level >= this.level && level !== LogLevel.Off) || this.level === LogLevel.All) {
      ret = true;
    }

    return ret;
  }

  add(log: string) {
    this.logMessages.push(log);
  }

  clear() {
    this.logMessages = [];
  }
}
