import { Injectable } from '@angular/core';
import { Menu } from './classes/Menu';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Summary } from './classes/Summary';
import { MyExperience } from './classes/MyExperience';
import { Header } from './classes/Header';
import { CoreSkill } from './classes/CoreSkill';
import { LoggingService } from './logging/logging.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private loggingService: LoggingService, private db: AngularFirestore) { }

  getMenus(): Observable<Menu[]> {
    return this.db.collection<Menu>('menus').valueChanges().pipe(
      tap(_ => this.log('fetched menus from firestore')),
      catchError(this.handleError<Menu[]>('getMenusFromFirestore', []))
    );
  }

  getHeader(): Observable<Header[]> {
    return this.db.collection<Header>('header').valueChanges().pipe(
      tap(_ => this.log('fetched header from firestore')),
      catchError(this.handleError<Header[]>('getHeaderFromFirestore', []))
    );
  }

  getSummary(): Observable<Summary[]> {
    return this.db.collection<Summary>('summary').valueChanges().pipe(
      tap(_ => this.log('fetched header from firestore')),
      catchError(this.handleError<Summary[]>('getSummaryFromFirestore', []))
    );
  }

  getCoreSkills(): Observable<CoreSkill[]> {
    return this.db.collection<CoreSkill>('coreSkills').valueChanges().pipe(
      tap(_ => this.log('fetched core skill from firestore')),
      catchError(this.handleError<CoreSkill[]>('getCoreSkills', []))
    );
  }

  getMyExperience(): Observable<MyExperience[]> {
    return this.db.collection<MyExperience>('myExperience').valueChanges().pipe(
      tap(_ => this.log('fetched myExperience from firestore')),
      catchError(this.handleError<MyExperience[]>('getMyExperience', []))
    )
  }

  private handleError<T>(action = 'action', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${action} failed: ${error.message}`)

      return of(result as T);
    }
  }

  private log(message: string) {
    this.loggingService.debug(message);
  }
}
