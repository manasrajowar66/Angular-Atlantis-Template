import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { customers } from '../../../assets/customers';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
    standalone: true,
    imports: [TableModule, CommonModule]
})
export class CustomersComponent {
    customers: any[] = [];
    cols: Column[] = [];

    constructor() {
        this.customers = [
            ...customers,
            ...customers,
            ...customers
        ];

        this.cols = [
            { field: 'name', header: 'Agent' },
            { field: 'country', header: 'Country' },
            { field: 'date', header: 'Date' },
            { field: 'balance', header: 'Balance' }
        ];
    }
}
