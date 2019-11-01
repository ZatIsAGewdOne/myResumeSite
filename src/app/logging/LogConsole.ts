import { LogPublisher } from './LogPublisher';
import { LogEntry } from './LogEntry';
import { Observable, of } from 'rxjs';

export class LogConsole extends LogPublisher {
    log(entry: LogEntry): Observable<boolean> {
        console.log(entry.buildLogString());
        return of(true);
    }

    clear(): Observable<boolean> {
        console.clear();
        return of(true);
    }
}