import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { ProductsComponent } from 'app/components/products/products.component';
import { OverviewComponent } from 'app/overview/components/overview/overview.component';
import { PurchasesComponent } from 'app/purchases/components/purhases/purchases.component';
import { SalesComponent } from 'app/sales/components/sales/sales.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'products',  component: ProductsComponent },
    {
        path: 'overview',
        component: OverviewComponent,
        children: [{
            path: 'overview',
            loadChildren: () => import('../../overview/overview.module').then(m => m.OverviewModule)
        }],
    },
    {
        path: 'purchases',
        component: PurchasesComponent,
        children: [{
            path: 'purchases',
            loadChildren: () => import('../../overview/overview.module').then(m => m.OverviewModule)
        }],
    },
    {
        path: 'sales',
        component: SalesComponent,
        children: [{
            path: 'sales',
            loadChildren: () => import('../../sales/sales.module').then(m => m.SalesModule)
        }],
    },
];
