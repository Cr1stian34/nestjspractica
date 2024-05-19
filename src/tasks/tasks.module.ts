import {Module} from "@nestjs/common"
import { TaskController } from "./tasks.controller";

@Module({controllers: [TaskController]})
export class TasksModule {}