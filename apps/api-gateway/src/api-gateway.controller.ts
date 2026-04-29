import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from './constants';

@Controller()
export class ApiGatewayController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.CATALOG_SERVICE)
    private readonly catalogServiceClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.INVENTORY_SERVICE)
    private readonly inventoryServiceClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.USER_SERVICE)
    private readonly userServiceClient: ClientProxy,
  ) {}

  @Get('catalogs')
  getCatalog() {
    return this.catalogServiceClient.send('get-catalog', {});
  }

  @Get('inventorys')
  getInventory() {
    return this.inventoryServiceClient.send('get-inventory', {});
  }

  @Get('users')
  getUser() {
    return this.userServiceClient.send('get-user', {});
  }
}
