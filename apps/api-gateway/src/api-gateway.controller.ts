import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
  constructor(
    @Inject('CATALOG_SERVICE')
    private readonly catalogServiceClient: ClientProxy,
    @Inject('INVENTORY_SERVICE')
    private readonly inventoryServiceClient: ClientProxy,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  @Get('catalog')
  getCatalog() {
    return this.catalogServiceClient.send('get-catalog', {});
  }

  @Get('inventory')
  getInventory() {
    return this.inventoryServiceClient.send('get-inventory', {});
  }

  @Get('user')
  getUser() {
    return this.userServiceClient.send('get-user', {});
  }
}
