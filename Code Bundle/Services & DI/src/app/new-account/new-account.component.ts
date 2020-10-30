import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from '../_shared/models/account.model';
import { LoggingService } from '../_shared/services/logging.service';
import { AccountsService } from '../_shared/services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @ViewChild('accountName') accountName;
  @ViewChild('accountStatus') accountStatus;

  constructor(private readonly accountsService: AccountsService) { }

  ngOnInit(): void {

  }

  onCreateAccount() {
    const accountName = this.accountName.nativeElement.value;
    const accountStatus = this.accountStatus.nativeElement.value;

    const account: Account = this.accountsService.addAccount(accountName, accountStatus);
    this.accountsService.accountCreated.emit(`Account created with name ${this.accountName}`);

    this.accountName.nativeElement.value = '';
    this.accountStatus.nativeElement.value = 'Choose...';
  }

}
