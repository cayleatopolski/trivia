import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService
      .getQuestions()
      .subscribe(response => (this.questions = response));
  }

  submitQuestions(form: NgForm): void {
    this.quizService.calculateScore(form.value, this.questions);
    form.reset();
    this.quizService.navigateToResults();

    //receive answers, calculate score, post to database, redirect to results route
  }
}
