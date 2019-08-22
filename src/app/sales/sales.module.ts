import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './components/sales/sales.component';
import { AngularMaterialModule } from 'app/angular-material/angular-material.module';
import { OverviewModule } from 'app/overview/overview.module';
import { PublicationComponent } from './components/publication/publication.component';
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { EstatusProductPipe } from 'app/pipes/estatus-product.pipe';


@NgModule({
  declarations: [SalesComponent, PublicationComponent, PublicationListComponent,EstatusProductPipe ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    OverviewModule,
    
  ],
  entryComponents:[],
})
export class SalesModule { }
