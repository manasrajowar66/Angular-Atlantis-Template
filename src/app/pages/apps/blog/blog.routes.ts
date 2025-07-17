import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

export default [
    {
        path: 'list',
        component: ListComponent,
        data: { breadcrumb: 'List' },
    },
] as Routes;
