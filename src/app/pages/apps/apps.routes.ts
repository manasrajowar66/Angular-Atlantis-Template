import { Routes } from '@angular/router';

export default [
    {
        path: 'blog',
        data: { breadcrumb: 'Blog' },
        loadChildren: () => import('./blog/blog.routes').then(m => m.default),
    },
] as Routes;
