import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardInterface } from '../../../card-interface';
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<CardInterface> = new EventEmitter();
  cardTitle!: string;
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onClick() {
    this.uiService.toggleAddTask();
  }

  onSubmit() {
    if (!this.cardTitle) {
      alert('Please added a task!');
      return;
    }

    const newTask = {
      cardTitle: this.cardTitle,
      id: 10,
      taskType1: '7',
      taskType2: 'Development',
      taskType3: 'Backlog',
      type: 'Backlog',
    };

    this.onAddTask.emit(newTask);

    this.cardTitle = '';

    this.uiService.toggleAddTask();
  }
}
