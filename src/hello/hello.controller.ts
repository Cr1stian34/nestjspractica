import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response, response } from 'express';

@Controller('/')
export class HelloController {
  @Get('/hello')
  getHello(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({ message: 'Hello word' });
  }
}
