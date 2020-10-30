import { Account } from '../models/account.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  logChangedStatus(status: string) {
    console.log(`Account status changed to ${status}`);
  }

  logNewAccount(account: Account) {
    console.log(`New Account created:`);
    console.log('Account', account);
  }
}
