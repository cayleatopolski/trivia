import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  playerAnswers: any;
  quizQuestions: any;
  correct = 0;
  constructor(private http: HttpClient) {}
  // private router: Router

  getQuestions(): Observable<any> {
    return this.http.get("http://localhost:8080/questions");
  }

  getScores(): Observable<any> {
    return this.http.get("http://localhost:8080/scores");
  }

  addScore(username: string, score: number): Observable<any> {
    return this.http.post("http://localhost:8080/scores", score);
  }

  calculateScore(form: any, questions: any) {
    console.log(form, questions);
    this.playerAnswers = form;
    this.quizQuestions = questions;
    for (let i = 0; i < questions.length; i++) {
      if (form.value === questions.answer) {
        this.correct++;
      }
    }
    console.log(this.correct);
    this.addScore(form.name, this.correct).subscribe();
  }

  // navigateToResults() {
  //   this.appRoutes.navigate(["results"]);
  // }

  // navigateToQuiz() {
  //   this.router.navigate(["quiz"]);
  // }

  // navigateToScores() {
  //   this.router.navigate(["scores"]);
  // }
}
