import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './components/sales/sales.component';
import { AngularMaterialModule } from 'app/angular-material/angular-material.module';
import { OverviewModule } from 'app/overview/overview.module';
import { PublicationComponent } from './components/publication/publication.component';

@NgModule({
  declarations: [SalesComponent, PublicationComponent ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    OverviewModule
  ],
  entryComponents:[

  ]

})
export class SalesModule { }
