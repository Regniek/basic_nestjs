import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    // de esta manera s epueden recibir dos parametros en una misma ruta
    @Get('/:categoryId/products/:productId')
    geCategory(@Param('productId') productId: string, @Param('categoryId') categoryId: string) {
      return `product ${productId} and category ${categoryId}`;
    }

}
