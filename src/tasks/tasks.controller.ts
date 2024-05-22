import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/create.task.dto';

@Controller('/tasks')
export class TaskController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get()
  getAllTask() {
    //buscar en una base de datos
    //peticion a otro backend o api
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  createTasks(@Body() data: CreateTaskDto) {
    return this.tasksService.createTask(data);
  }

  @Put()
  updateTasks(@Body() dataUpdate: UpdateTaskDto) {
    return this.tasksService.updateTask(dataUpdate);
  }

  @Delete()
  deleteTasks() {
    return this.tasksService.deleteTask();
  }

  @Patch()
  putTasks() {
    return this.tasksService.patchTask();
  }
}
