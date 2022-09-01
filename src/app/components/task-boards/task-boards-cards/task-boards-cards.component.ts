import { Component, OnInit, Input } from '@angular/core';
import { CardDetails } from '../../../card-details';
import { CardInterface } from '../../../card-interface';

@Component({
  selector: 'app-task-boards-cards',
  templateUrl: './task-boards-cards.component.html',
  styleUrls: ['./task-boards-cards.component.css'],
})
export class TaskBoardsCardsComponent implements OnInit {
  forCard: CardInterface[] = CardDetails;
  @Input() cardRowHeader = '';

  constructor() {}

  ngOnInit(): void {}
}
