import { Component, OnInit } from '@angular/core';
import { Account } from './_shared/models/account.model';
import { AccountsService } from './_shared/services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private readonly accountsService: AccountsService) {  }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
