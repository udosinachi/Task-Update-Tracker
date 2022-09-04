import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ToDoTask } from '../../to-do-task';
import { CardDetails } from '../../card-details';
import { InProcessTask } from '../../in-process.task';
import { DoneTask } from '../../done-task';

@Component({
  selector: 'app-task-boards',
  templateUrl: './task-boards.component.html',
  styleUrls: ['./task-boards.component.css'],
})
export class TaskBoardsComponent implements OnInit {
  task1 = CardDetails;
  task2 = ToDoTask;
  task3 = InProcessTask;
  task4 = DoneTask;

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
