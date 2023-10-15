// El class-validator es una libreria que nos permite validar los datos que se envian en el body de la peticion
import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
// con esta dependecia podemos compartir parte d elo que se creo en el class validator como base para otros dtos
import { PartialType } from '@nestjs/mapped-types';
// los dtos (data transfer object) son objetos que se utilizan para proteger los datos validar y tipar, evitar hacer referencia a datos que no existan

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

// el partialType permite extender las validaciones del create y ademas dejarlos opcionales
export class UpdateProductDto extends PartialType(CreateProductDto) {
  // los signos de pregutna es para que en el update los diferentes parametros queden opcionales
  // @IsString()
  // readonly name?: string;
  // @IsString()
  // readonly description?: string;
  // @IsNumber()
  // readonly price?: number;
  // @IsNumber()
  // readonly stock?: number;
  // @IsUrl()
  // readonly image?: string;
}
