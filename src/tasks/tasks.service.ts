import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './entity/tasks.entity'
import { v4 } from 'uuid'

@Injectable()
export class TasksService {

  private tasks: Task[] = []

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task = new Task
    task.id = v4()
    task.title = title
    task.description = description
    task.status = TaskStatus.PENDING
    this.tasks.push(task)
    return this.tasks
  }

  updateTask() { }

  deleteTask() { }
}
