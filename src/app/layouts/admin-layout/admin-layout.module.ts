import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { ProductsComponent } from 'app/components/products/products.component';

import { ProductsService } from 'app/services/products.service';
import { AngularMaterialModule } from 'app/angular-material/angular-material.module';
import { OverviewModule } from 'app/overview/overview.module';
import { PurchasesModule } from 'app/purchases/purchases.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    OverviewModule,
    PurchasesModule
  ],
  declarations: [
    UserProfileComponent,
    NotificationsComponent,
    ProductsComponent
  ],
  providers: [
    ProductsService
  ]
})

export class AdminLayoutModule { }
