  import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';

const counter = timer(0, 5);

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: [ './timer.component.scss' ]
})
export class TimerComponent implements OnChanges  {
  private subscription : Subscription;
  private timer = new Date(0,0,0);

  @Input() active: string;

  ngOnChanges() {
    if (this.active) {
      this.startTimer();     
    } else {
      this.ngOnDestroy();
    }    
  }

  startTimer() {    
    this.subscription = timer(0,5).subscribe(t => {
      this.timer = new Date(0, 0, 0);
      this.timer.setSeconds(t);
    });  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


 
}
