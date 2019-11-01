import { Injectable } from '@angular/core';
import { Menu } from './classes/Menu';
import { MENUS, SUMMARY, MYEXPERIENCE, HEADER } from './resumeData';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Summary } from './classes/Summary';
import { MyExperience } from './classes/MyExperience';
import { Header } from './classes/Header';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoreSkill } from './classes/CoreSkill';
import { LoggingService } from './log/logging.service';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private url = 'api'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient, private loggingService: LoggingService) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.url}/menus`).pipe(
      tap(_ => this.log('fetched menus')),
      catchError(this.handleError<Menu[]>('getMenus', []))
    );
  }

  getHeader(): Observable<Header> {
    return this.http.get<Header>(`${this.url}/header`).pipe(
      tap(_ => this.log('fetched header')),
      catchError(this.handleError<Header>('getHeader'))
    );
  }

  getSummary(): Observable<Summary> {
    return this.http.get<Summary>(`${this.url}/summary`).pipe(
      tap(_ => this.log('fetched summary')),
      catchError(this.handleError<Summary>('getSummary'))
    );
  }

  getCoreSkills(): Observable<CoreSkill> {
    return this.http.get<CoreSkill>(`${this.url}/coreSkills`).pipe(
      tap(_ => this.log('fetched core skills')),
      catchError(this.handleError<CoreSkill>('getCoreSkills'))
    );
  }

  getMyExperience(): Observable<MyExperience> {
    return this.http.get<MyExperience>(`${this.url}/myExperience`).pipe(
      tap(_ => this.log('fetched myExperience')),
      catchError(this.handleError<MyExperience>('getMyExperience'))
    );
  }

  private handleError<T>(action = 'action', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${action} failed: ${error.message}`)

      return of(result as T);
    }
  }

  private log(message: string) {
    this.loggingService.add(message);
    this.loggingService.log(message);
  }
}
