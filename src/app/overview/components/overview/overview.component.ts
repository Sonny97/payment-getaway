import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionComponent } from '../questions/question.component';
import { QuestionsService } from 'app/overview/services/questions.service';
import { ProductInterationService } from 'app/services/productInteration.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public panelOpenState = false;
  public countQuestions = 0;
  public dataQuestions: any[];
  
  // kiero points
  public valueBar = 0;

  // Notification
  public active:number = 0;
  _active:boolean = false
  public stop:number = 0;
  _stop:boolean = false;
  public finished:number=0;
  _finished:boolean = false;


  constructor(
    private questionService: QuestionsService,
    public dialog: MatDialog,
    private _productInterationService: ProductInterationService){ }

  ngOnInit() {  
    this._productInterationService.summarySend("Log")
    this.questionService.getAllQuestions().subscribe(
      res => {
        this.dataQuestions = res;
        if (Array.isArray(res.result.message)) {
          this.countQuestions = res.result.message.length;
        } else {
          console.log('Dont is array');
        }
      },
      err => console.log(err)
    )
    
  }

  openDialogQuestions(): void {
    this.questionService.getAllQuestions().subscribe(
      res => {
        if (Array.isArray(res.result.message)) {
          const dialogRef = this.dialog.open(QuestionComponent, {
            width: '1350px',
            height: '600px',
            data: { res }
          });
        } else {
          console.log('Dont is array');
        }
      },
      err => console.log(err)
    )
  }

  publicationSummary(){
    console.log(JSON.parse(sessionStorage.getItem('summary')))
    if(JSON.parse(sessionStorage.getItem('summary'))[0].active.length > 0){
      this.active = JSON.parse(sessionStorage.getItem('summary'))[0].active.length
      this._active = true
    }
    if(JSON.parse(sessionStorage.getItem('summary'))[0].stop.length > 0){
      this.stop = JSON.parse(sessionStorage.getItem('summary'))[0].stop.length
      this._stop = true
    }
    if(JSON.parse(sessionStorage.getItem('summary'))[0].finished.length > 0){
      this.finished = JSON.parse(sessionStorage.getItem('summary'))[0].finished.length
      this._finished = true
    }
  }
}