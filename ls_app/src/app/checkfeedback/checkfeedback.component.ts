import { Component,OnInit} from '@angular/core';
import { UsercategoryService } from '../usercategory.service';
@Component({
  selector: 'app-checkfeedback',
  templateUrl: './checkfeedback.component.html',
  styleUrls: ['./checkfeedback.component.css']
})
export class CheckfeedbackComponent implements OnInit {
  
  constructor(
    private categoryService: UsercategoryService
  ) {}


  feedbackList: any[] = [];
ngOnInit(): void {

  this.loadFeedback();

}




loadFeedback(): void {

  this.categoryService.getFeedback().subscribe(
    response => {
      this.feedbackList = response;
    },
    error => {
      console.error('Error loading feedback:', error);
    }
  );
}
}
