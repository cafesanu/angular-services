import { Component, OnInit } from '@angular/core';
import { IAccount } from './models/account.model';
import { AccountsService } from './services/accounts/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public accounts: IAccount[] = [];

  constructor(
    private _accountsService: AccountsService,
  ) {
  }

  public ngOnInit(): void {
    this.accounts = this._accountsService.accounts;
  }
}
