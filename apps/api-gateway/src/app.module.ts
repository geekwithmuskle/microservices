import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MICROSERVICES_CLIENT } from './constants';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderController } from './order/order.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICES_CLIENT.ORDER_SERVICE,
        transport: Transport.TCP,
        options: { port: 3001 },
      },
      {
        name: MICROSERVICES_CLIENT.USER_SERVICE,
        transport: Transport.TCP,
        options: { port: 4003 },
      },
      {
        name: MICROSERVICES_CLIENT.PRODUCTS_SERVICE,
        transport: Transport.TCP,
        options: { port: 4002 },
      },
    ]),
  ],
  controllers: [AppController, OrderController],
  providers: [AppService],
})
export class AppModule {}
