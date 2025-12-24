import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class UserController {
  @MessagePattern('get-user')
  getUser(userId: number) {
    // Logic to get a user by ID
    return { id: userId, name: 'John Doe', email: 'johndoe@example.com' };
  }
}
