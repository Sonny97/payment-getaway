import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { AngularMaterialModule } from 'app/angular-material/angular-material.module';
import { QuestionComponent } from './components/questions/question.component';
import { QuestionsService } from './services/questions.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    IndexComponent,
    QuestionComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuestionsService
  ],
  entryComponents: [
    QuestionComponent
  ]
})
export class OverviewModule { }
