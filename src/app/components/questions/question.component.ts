import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsService } from 'app/services/questions.service';
import { MatSnackBar } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-list',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public questions: any[] = [];
  displayedColumns: string[] = ['id', 'Usuario', 'Producto', 'Pregunta', 'Respuesta', 'Acciones'];
  dataSource = new MatTableDataSource<any>(this.questions);

  constructor(
    private questionService: QuestionsService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.questionService.getAllQuestions().subscribe(
      res => {
        if (Array.isArray(res.result.message)) {
          this.questions = res.result.message;
          this.questions.forEach((element => element.answer = ''));
          this.dataSource.data = this.questions;
        } else {
          console.log('Dont is array');
        }
      },
      err => console.log(err)
    );
  }

  /**
   * openSnackBar: Open a little dialog
   */
  public openSnackBar(msg, icon) {
    this._snackBar.open(msg, icon, {
      duration: 5 * 1000,
      verticalPosition: 'top'
    });
  }

  /**
   * openDetailProduct
   */
  public openDetailProduct(question) {
    const url = `https://www.kiero.co/product-details?id=${question.Producto_Id}-${question.Titulo}`;
    window.open(url);
  }

  /**
   * sendAnswer: Send the id from the question and the answer
   */
  public sendAnswer(question) {
    this.questionService.sendAnswer(question).subscribe(
      res => {
        if (res.status === 'success' && res.result.code === 1) {
          this.openSnackBar(`${res.result.message}`, '🙌');
          this.questions = res.questions_avalible;
          this.dataSource.data = this.questions;
        } else {
          this.openSnackBar(res.result.message ? res.result.message : 'Oopps.. 😱 Ocurrio un error enviando la respuesta', '😭')
        }
      },
      err => console.error(err)
    )
  }
}
