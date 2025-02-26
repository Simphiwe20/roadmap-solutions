import { Component, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  progressVal: any

  getProgess(event: any) {
    this.progressVal = event ? event : 0
  }

}
