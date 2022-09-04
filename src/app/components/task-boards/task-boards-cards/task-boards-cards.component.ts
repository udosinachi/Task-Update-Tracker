import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardDetails } from '../../../card-details';
import { CardInterface } from '../../../card-interface';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-boards-cards',
  templateUrl: './task-boards-cards.component.html',
  styleUrls: ['./task-boards-cards.component.css'],
})
export class TaskBoardsCardsComponent implements OnInit {
  // forCard: CardInterface[] = CardDetails;
  @Input() cardRowHeader = '';

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<CardInterface[]>, id: any) {
    console.log(event);
    // if (event.distance.x <= 400 && event.distance.x >= 250) {
    //   for (let i in this.forCard) {
    //     if (this.forCard[i].type == this.cardRowHeader) {
    //       this.forCard[i].type = 'To Do Task';
    //       break;
    //     }
    //   }
    // }
    // if (event.distance.x <= 650 && event.distance.x >= 550) {
    //   for (let i in this.forCard) {
    //     if (this.forCard[i].type == this.cardRowHeader) {
    //       this.forCard[i].type = 'In Process';
    //       break;
    //     }
    //   }
    // }
  }

  // onBackLogTask() {
  //   for (let i in this.forCard) {
  //     if (this.forCard[i].type == this.cardRowHeader) {
  //       this.forCard[i].type = 'Backlog Task';
  //       break;
  //     }
  //   }
  // }
  // onToDoTask() {
  //   for (let i in this.forCard) {
  //     if (this.forCard[i].type == this.cardRowHeader) {
  //       this.forCard[i].type = 'To Do Task';
  //       break;
  //     }
  //   }
  // }
  // onInProgess() {
  //   for (let i in this.forCard) {
  //     if (this.forCard[i].type == this.cardRowHeader) {
  //       this.forCard[i].type = 'In Process';
  //       break;
  //     }
  //   }
  // }
  // onDone() {
  //   for (let i in this.forCard) {
  //     if (this.forCard[i].type == this.cardRowHeader) {
  //       this.forCard[i].type = 'Done';
  //       break;
  //     }
  //   }
  // }
}
