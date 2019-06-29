import { Routes } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { QuestionComponent } from '../../components/questions/question.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { ProductsComponent } from 'app/components/products/products.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'questions',     component: QuestionComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'products',  component: ProductsComponent },
];
