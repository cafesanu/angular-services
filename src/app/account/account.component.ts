import { Component, Input } from '@angular/core';
import { AccountsService } from './../services/accounts/accounts.service';
import { LoggingService } from './../services/logging/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() public account: {name: string; status: string};
  @Input() public id: number;

  constructor(
    private _loggingService: LoggingService,
    private _accountsService: AccountsService,
  ) {
  }

  public onSetTo(status: string): void {
    this._accountsService.updateStatus(this.id, status);
    this._accountsService.statusUpdated.emit(status);
  }
}
