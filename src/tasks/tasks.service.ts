import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTaskDto } from './dto/create.task.dto';

export interface UserTask {
  name: string;
  task: string;
}

@Injectable({})
export class TasksService {
  private tasks = [];
  getTasks(): UserTask[] {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(
        `La tarea con este id: ${id} no fue encontrada`,
      );
    }
    return taskFound;
  }

  createTask(data: UserTask) {
    console.log('esta es la data del body=>', data);
    this.tasks.push({ ...data, id: this.tasks.length + 1 });
    return data;
  }

  updateTask(dataUpdate: UpdateTaskDto) {
    console.log(dataUpdate.name);
    return 'Actualizando tareas';
  }

  deleteTask() {
    return 'Eliminando tareas';
  }

  patchTask() {
    return 'Actualizando tareas praciales';
  }
}
