import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { ProductsComponent } from 'app/components/products/products.component';
import { IndexComponent } from 'app/overview/components/index/index.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'products',  component: ProductsComponent },
    {
        path: 'overview',
        component: IndexComponent,
        children: [{
            path: 'overview',
            loadChildren: () => import('../../overview/overview.module').then(m => m.OverviewModule)
        }],
  },
];
