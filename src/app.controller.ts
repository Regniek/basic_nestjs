import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/new-endpoint')
  newEndpoint(): string {
    return 'yo soy nuevo';
  }

}
// decoradores
// los decoradores le dicen a nest como vamos a trabajar
