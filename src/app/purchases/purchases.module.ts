import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './components/purhases/purchases.component';
import { AngularMaterialModule } from 'app/angular-material/angular-material.module';
import { OverviewModule } from 'app/overview/overview.module';

@NgModule({
  declarations: [PurchasesComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    OverviewModule
  ]
})
export class PurchasesModule { }
