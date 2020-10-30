import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../_shared/models/account.model';
import { LoggingService } from '../_shared/services/logging.service';
import { AccountsService } from '../_shared/services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: Account;

  constructor(private readonly accountsService: AccountsService) {
    this.accountsService.accountCreated.subscribe((message) => {
      console.log(message);
    });
  }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountsService.updateAccountStatus(this.account.id, status);
  }

  onDeleteAccount() {
    this.accountsService.deleteAccount(this.account.id);
  }

}
