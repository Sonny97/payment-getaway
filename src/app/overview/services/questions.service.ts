import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  /**
   * getAllQuestions
   */
  public getAllQuestions(): Observable<any> {
    return this.http.get<any>('http://10.4.28.9:7894/get_all_qa');
  }

  /**
   * sendAnswer
   */
  public sendAnswer(question): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>('http://10.4.28.9:7894/insert_answers',
    {
      id_pregunta: question.id,
      respuesta: question.answer
    },
    { headers }
    )
  }
}
