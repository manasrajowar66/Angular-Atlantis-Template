import { Component } from '@angular/core';
import { UniqueVisitorGraphComponent } from './unique-visitor-graph/unique-visitor-graph.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CustomersComponent } from './customers/customers.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [UniqueVisitorGraphComponent, TransactionHistoryComponent, CustomersComponent]
})
export class DashboardComponent {}
