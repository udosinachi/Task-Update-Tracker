import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBoardsHeaderComponent } from './task-boards-header.component';

describe('TaskBoardsHeaderComponent', () => {
  let component: TaskBoardsHeaderComponent;
  let fixture: ComponentFixture<TaskBoardsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBoardsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBoardsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
