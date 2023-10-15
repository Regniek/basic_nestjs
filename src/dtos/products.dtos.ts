import exp from "constants";

// los dtos (data transfer object) son objetos que se utilizan para proteger los datos validar y tipar, evitar hacer referencia a datos que no existan

export class CreateProductDto{
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDto{
  // los signos de pregutna es para que en el update los diferentes parametros queden opcionales
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
