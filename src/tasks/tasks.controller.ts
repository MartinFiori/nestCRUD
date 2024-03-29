import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service'
import createTaskDto from './dto/createTask.dto';

@Controller('tasks')
export class TasksController {


  constructor(private tasksService: TasksService) { }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks()
  }

  @Post()
  createTask(@Body() newTask: createTaskDto) {
    return this.tasksService.createTask(newTask.title, newTask.description)
  }
}
