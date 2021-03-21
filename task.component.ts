import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskObj: Task;
  @Output() deleteTask: EventEmitter<TaskComponent> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    // console.log('delete task');
    this.deleteTask.emit(this);
  }

}
