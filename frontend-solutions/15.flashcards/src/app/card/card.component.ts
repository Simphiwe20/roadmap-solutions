import { Component } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { Flashcard } from '../flashcard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private sharedService: SharedServicesService){}

  flashCards: Flashcard[] = this.sharedService.getFlashcards()
  
}
