import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { Flashcard } from '../flashcard';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {
  @Output() progress: EventEmitter<any> = new EventEmitter();

  currentIndex: number = 0
  flashCards: Flashcard[] = this.sharedService.getFlashcards()
  currentItem: Flashcard = this.flashCards[this.currentIndex]
  isQuestion: boolean = true
  currentProgess: any
  isComplete: boolean = false

  constructor(private sharedService: SharedServicesService) { }

  ngAfterViewInit(): void {
    this.calcProgess()
  }

  next() {
    this.currentIndex++
    if (this.flashCards.length - 1 >= this.currentIndex) {
      this.currentItem = this.flashCards[this.currentIndex]
      this.isQuestion = true
      this.calcProgess()
    } else if (this.flashCards.length - 1 < this.currentIndex) {
      this.isComplete = true
    } else {
      this.currentIndex--
    }
  }

  previous() {
    this.currentIndex--
    if (this.currentIndex >= 0) {
      this.currentItem = this.flashCards[this.currentIndex]
      this.isQuestion = true
      this.calcProgess()
    } else {
      this.currentIndex = 0
    }
  }

  toggleShow() {
    this.isQuestion = !this.isQuestion
  }

  calcProgess() {
    this.currentProgess = this.currentIndex / (this.flashCards.length - 1) * 100
    this.sendProgress(Math.floor(this.currentProgess))
  }

  sendProgress(progress: any) {
    this.progress.emit(progress)
  }

  startAgain() {
    this.currentIndex = 0
    this.currentItem = this.flashCards[this.currentIndex]
    this.isComplete = false
    this.calcProgess()
  }

}
