import { Component } from '@angular/core';
import { Ripple } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';

@Component({
    selector: 'app-transaction-history',
    templateUrl: './transaction-history.component.html',
    styleUrls: ['./transaction-history.component.scss'],
    standalone: true,
    imports: [Ripple, DividerModule, CommonModule, TimelineModule]
})
export class TransactionHistoryComponent {
    transactions: any[] = [];
    constructor() {
        this.transactions = [
            {
                status: 'success',
                title: 'Payment from John Doe',
                date: new Date('2025-07-15T09:15:00'),
                icon: 'pi pi-check',
                color: 'var(--color-emerald-500)',
                amount: '+$120.00'
            },
            {
                status: 'failed',
                title: 'Payment from Sarah Lee',
                date: new Date('2025-07-14T17:42:00'),
                icon: 'pi pi-times',
                color: 'var(--color-red-400)',
                amount: '-$85.50'
            },
            {
                status: 'pending',
                title: 'Payment from David Kim',
                date: new Date('2025-07-13T11:20:00'),
                icon: 'pi pi-clock',
                color: 'var(--color-yellow-600)',
                amount: '$210.30'
            },
            {
                status: 'success',
                title: 'Payment from Emily Carter',
                date: new Date('2025-07-12T14:55:00'),
                icon: 'pi pi-check',
                color: 'var(--color-emerald-500)',
                amount: '+$99.99'
            },
            {
                status: 'failed',
                title: 'Payment from Alex Johnson',
                date: new Date('2025-07-11T08:03:00'),
                icon: 'pi pi-times',
                color: 'var(--color-red-400)',
                amount: '$47.25'
            },
            {
                status: 'refunded',
                title: 'Refund to Michael Brown',
                date: new Date('2025-07-10T19:12:00'),
                icon: 'pi pi-refresh',
                color: 'var(--color-blue-500)',
                amount: '+$150.00'
            },
            {
                status: 'pending',
                title: 'Payment from Olivia Wilson',
                date: new Date('2025-07-09T12:48:00'),
                icon: 'pi pi-clock',
                color: 'var(--color-yellow-600)',
                amount: '$69.99'
            },
            {
                status: 'success',
                title: 'Payment from Daniel Smith',
                date: new Date('2025-07-08T09:00:00'),
                icon: 'pi pi-check',
                color: 'var(--color-emerald-500)',
                amount: '+$310.00'
            },
            {
                status: 'refunded',
                title: 'Refund to Sophia Miller',
                date: new Date('2025-07-07T16:27:00'),
                icon: 'pi pi-refresh',
                color: 'var(--color-blue-500)',
                amount: '+$59.00'
            },
            {
                status: 'failed',
                title: 'Payment from Ryan Garcia',
                date: new Date('2025-07-06T10:10:00'),
                icon: 'pi pi-times',
                color: 'var(--color-red-400)',
                amount: '-$42.00'
            }
        ];
    }
}
