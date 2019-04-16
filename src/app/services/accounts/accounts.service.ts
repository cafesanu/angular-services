import { EventEmitter, Injectable } from '@angular/core';
import { IAccount } from './../../models/account.model';
import { LoggingService } from './../logging/logging.service';

// tslint:disable-next-line: no-unsafe-any
@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  public accounts: IAccount[] = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  public statusUpdated: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _loggingService: LoggingService,
  ) {
  }

  public addAccount(name: string, status: string): void {
    this.accounts.push({
      name,
      status,
    });
    this._loggingService.logStatusChange(status);
  }

  public updateStatus(index: number, status: string): void {
    this.accounts[index].status = status;
    this._loggingService.logStatusChange(status);
  }
}
