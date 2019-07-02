import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { QuestionComponent } from '../../components/questions/question.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { ProductsComponent } from 'app/components/products/products.component';

import { QuestionsService } from 'app/services/questions.service';
import { ProductsService } from 'app/services/products.service';
import { AngularMaterialModule } from 'app/angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    QuestionComponent,
    NotificationsComponent,
    ProductsComponent
  ],
  providers: [
    QuestionsService,
    ProductsService
  ]
})

export class AdminLayoutModule { }
