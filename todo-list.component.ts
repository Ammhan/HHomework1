  
import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';

@Component ({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    tasks: Task[] = [];

    // task: Task;
    taskName: string;
    taskDescription: string;

    addTask () {
        let tempTask: Task = {
            id: 'xxxxx',
            name: this.taskName,
            description: this.taskDescription,
        }
    this.tasks.push(tempTask);
        // this.tasks.push(this.task);
    }

    deleteTask(taskComponent: TaskComponent) {
       // this.tasks = this.tasks.filter(t => t.id !== taskComponent.taskObj.id);
        console.log(this.tasks);
        console.log(taskComponent);
        this.tasks = this.tasks.filter(t => t !== taskComponent.taskObj);
    }

}