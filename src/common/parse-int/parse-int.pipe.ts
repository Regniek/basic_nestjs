import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  // este es un pipe creado por nosotros para validar los parametros de entrada los pipes son para validar y transformar datos
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      // si no es un numero lanzamos un error
      throw new Error(`Validation failed. ${value} is not an integer.`);
    }
    return val;
  }
}
