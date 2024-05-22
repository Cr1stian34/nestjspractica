import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  task: string;
}

export interface UpdateTaskDto {
  name?: string;
  task?: string;
}
