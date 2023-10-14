import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('/products/:productId')
  // se puede modificar la forma de ingresar parametros cambiar el params por el parametro especifico y colocar su tipo
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  // de esta manera s epueden recibir dos parametros en una misma ruta
  @Get('/categories/:categoryId/products/:productId')
  geCategory(@Param('productId') productId: string, @Param('categoryId') categoryId: string) {
    return `product ${productId} and category ${categoryId}`;
  }


}


// decoradores
// los decoradores le dicen a nest como vamos a trabajar
