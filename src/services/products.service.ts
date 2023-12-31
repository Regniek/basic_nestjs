import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from '../entities/product.entity';

// este decorador es especifico y importante para los servicios
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla bla',
      price: 122,
      image: '',
      stock: 12
    }
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex(item => item.id === id);
      this.products[index] = {
        // de esta manera se maneja el merge en js con el operador spread
        ...product,
        ...payload
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.products.findIndex(item => item.id === id);
    if (index >= 0) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}
