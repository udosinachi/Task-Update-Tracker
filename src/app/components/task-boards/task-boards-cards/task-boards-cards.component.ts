import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  onBackLogTask() {
    for (let i in this.forCard) {
      if (this.forCard[i].type == this.cardRowHeader) {
        this.forCard[i].type = 'Backlog Task';
        break;
      }
    }
  }
  onToDoTask() {
    for (let i in this.forCard) {
      if (this.forCard[i].type == this.cardRowHeader) {
        this.forCard[i].type = 'To Do Task';
        break;
      }
    }
  }
  onInProgess() {
    for (let i in this.forCard) {
      if (this.forCard[i].type == this.cardRowHeader) {
        this.forCard[i].type = 'In Progess';
        break;
      }
    }
  }
  onDone() {
    for (let i in this.forCard) {
      if (this.forCard[i].type == this.cardRowHeader) {
        this.forCard[i].type = 'Done';
        break;
      }
    }
  }
}
