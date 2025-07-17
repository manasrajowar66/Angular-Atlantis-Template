import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // 👈 layout wraps inner routes
    children: [
      {
        path: '',
        data: { breadcrumb: 'E-Commerce Dashboard' },
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'apps',
        data: { breadcrumb: 'Apps' },
        loadChildren: () =>
          import('./pages/apps/apps.routes').then(
            (m) => m.default
          ),
      },
    ],
  },
];
