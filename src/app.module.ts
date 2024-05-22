import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [TasksModule, ProjectsModule, UsersModule, AuthModule, HelloModule],
})
export class AppModule {}
