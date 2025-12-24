import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller('orders')
export class OrderController {
  @MessagePattern('create-order')
  createOrder(orderData: any) {
    console.log({ message: 'Order received in Order Service', orderData });
    // Logic to create an order
    return { status: 'Order created', data: orderData };
  }
}