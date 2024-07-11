import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
  
  constructor(private tasksService: TasksService){
    this.tasksService = tasksService;
  }


  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  //Se puede cambiar estos dos métodos de abajo haciendo this.isAddingTask = !this.isAddingTask; y solo tener uno

  onOpenAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
