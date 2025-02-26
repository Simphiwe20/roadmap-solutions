import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges {
  @Input() progressVal: any
  progress: any;
  isComplete: boolean = false

  ngOnChanges(changes: SimpleChanges): void {
    this.progress = this.progressVal
    this.isComplete = this.progress == 100
    console.log("this.isComplete : ", this.isComplete )
  }

}
