import { Component } from '@angular/core';
import { UsercategoryService } from '../usercategory.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  constructor(
    private categoryService: UsercategoryService
  ) {}

  feedback = {

    email: '',

    feedback: ''

  };
  submitFeedback() {

    this.categoryService.createFeedback(this.feedback)
      .subscribe(() => {
        alert('Feedback submitted successfully');
        // Reset the form
        this.feedback = {
          email: '',
          feedback: ''
        };
      }, (error) => {
        console.error('Failed to submit feedback', error);
      });

  }
}
