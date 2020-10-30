import { Account } from '../models/account.model';
import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AccountsService {
  i = 3;

  accounts: Account[] = [
    new Account(1, 'Master Account', 'Active'),
    new Account(2 + Math.floor(Math.random()), 'Secondary Account', 'Active'),
    new Account(3 + Math.floor(Math.random()), 'Joined Account', 'Unknown')
  ];

  accountCreated = new EventEmitter<string>();

  constructor(private readonly loggingService: LoggingService) {  }

  addAccount(accountName: string, accountStatus: string) {
    const id: number = ++this.i;
    const account: Account = new Account(id, accountName, accountStatus);
    this.accounts.push(account);
    this.loggingService.logNewAccount(account);
    return account;
  }

  updateAccountStatus(id: number, accountStatus: string) {
    const index: number = this.accounts.findIndex(e => e.id === id);
    this.accounts[index].accountStatus = accountStatus;
    this.loggingService.logChangedStatus(accountStatus);
  }

  deleteAccount(id: number) {
    const index: number = this.accounts.findIndex(e => e.id === id);
    this.accounts.splice(index, 1);
  }
}
