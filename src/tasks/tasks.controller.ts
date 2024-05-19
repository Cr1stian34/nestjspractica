import {Controller, Get} from "@nestjs/common"

@Controller({})
export class TaskController {

    @Get('/tasks')
    getAllTask(){
        //buscar en una base de datos
        //peticion a otro backend o api
        return "Obteniendo todas las tareas"
    }

    @Get('/')
    index(){
        return "Pagina inicial"
    }
    
}