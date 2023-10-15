import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';

// esta linea tiene res par ausar express como status code import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, Res } from '@nestjs/common';
// con res en nest js mas response de express podemos manejar los status code desde node directamente
//import { Response } from 'express';
// des esta manera importamos el servicio
import { ProductsService } from '../services/products.service';

// este decorador es especifico de los controladores
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  // puedo asignar un valor especifico por defecto a un parametro y typescript ya entendera que todo lo que ingrese debe ser de ese tipo de dato
  getProducts(@Query('limit') limit= 100 , @Query('offset') offset= 0, @Query('brand') brand: number) {
    // return {
    //   message: `products limit ${limit} and offset ${offset}`
    // };
    return this.productsService.findAll();
  }

  // siempre definir las rutas que no son dinamicas primero

  @Get('/filter')
  getProductFilter() {
    return {
      message: 'yo soy un filter'
    };
  }


  @Get('/:productId')
  // esta es la manera d emanejar status code ds de nest js
  @HttpCode(HttpStatus.ACCEPTED)
  // se puede modificar la forma de ingresar parametros cambiar el params por el parametro especifico y colocar su tipo
  //esta es la forma exprese vamos a dejarlo timpop nest getOne(@Res() response: Response, @Param('productId') productId: string) {
  getOne(@Param('productId') productId: string) {
    //con express lo enviariamos de la manera clasica con response
    // response.status(200).send({
    //   message: `product ${productId}`
    // });
    return this.productsService.findOne(+productId);
  }

  @Post()
  // esta es la manera de manejar los body
  // no es eficiente especificar el body solo en dado caso que sea necesario
  create(@Body() payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload
    // };
    return this.productsService.create(payload);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() payload: any) {
    // return {
    //   id,
    //   payload
    // };
    return this.productsService.update(id, payload);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    // return {
    //   id
    // };
    return this.productsService.delete(id);
  }

}
