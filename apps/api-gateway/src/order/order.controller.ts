import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES_CLIENT } from 'src/constants';

@Controller('orders')
export class OrderController {
  constructor(
    @Inject(MICROSERVICES_CLIENT.ORDER_SERVICE)
    private readonly orderServiceClient: ClientProxy,
  ) {}

  // Controller methods will be defined here
  @Post()
  async createOrder(@Body() orderData: any) {
    return await this.orderServiceClient.send('create-order', orderData);
  }
}
