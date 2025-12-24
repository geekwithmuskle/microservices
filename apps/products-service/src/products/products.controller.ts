import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  @MessagePattern('get-product')
  getProduct(productId: number) {
    // Logic to get a product by ID
    return { id: productId, name: 'Sample Product', price: 100 };
  }
}
