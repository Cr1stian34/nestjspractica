export interface CreateTaskDto {
  name: string;
  task: string;
}

export interface UpdateTaskDto {
  name?: string;
  task?: string;
}
