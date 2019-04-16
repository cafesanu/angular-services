import {AccountsService} from './../services/accounts/accounts.service';
import { LoggingService } from './../services/logging/logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(
    private _accountsService: AccountsService,
  ) {
    this._accountsService.statusUpdated.subscribe((status: string) => alert(`new status: ${status}`));
  }

  public onCreateAccount(name: string, status: string): void {
    this._accountsService.addAccount(name, status);
  }
}
