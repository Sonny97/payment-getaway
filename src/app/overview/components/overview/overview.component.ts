import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionComponent } from '../questions/question.component';
import { QuestionsService } from 'app/overview/services/questions.service';

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

  constructor(
    private questionService: QuestionsService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
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
}
