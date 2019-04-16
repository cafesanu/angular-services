import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  public logStatusChange(status: string) {
    // tslint:disable-next-line: no-console
    console.log(`A server status changed, new status: ${status}`);

  }
}
