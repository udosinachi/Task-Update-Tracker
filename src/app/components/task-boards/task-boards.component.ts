import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-boards',
  templateUrl: './task-boards.component.html',
  styleUrls: ['./task-boards.component.css'],
})
export class TaskBoardsComponent implements OnInit {
  cardSectionTitle1 = 'Backlog Task';
  cardSectionTitle2 = 'To Do Task';
  cardSectionTitle3 = 'In Progess';
  cardSectionTitle4 = 'Done';
  constructor() {}

  ngOnInit(): void {}
}
