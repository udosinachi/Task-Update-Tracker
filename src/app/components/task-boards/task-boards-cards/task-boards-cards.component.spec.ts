import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBoardsCardsComponent } from './task-boards-cards.component';

describe('TaskBoardsCardsComponent', () => {
  let component: TaskBoardsCardsComponent;
  let fixture: ComponentFixture<TaskBoardsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBoardsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBoardsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
