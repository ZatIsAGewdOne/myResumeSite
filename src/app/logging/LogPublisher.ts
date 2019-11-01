import { LogEntry } from './LogEntry';
import { Observable } from 'rxjs';

export abstract class LogPublisher {

    location: string;

    abstract log(record: LogEntry): Observable<boolean>;
    abstract clear(): Observable<boolean>;
}