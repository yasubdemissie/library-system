import { Controller } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @MessagePattern('get-inventory')
  getInventory(): string {
    return this.inventoryService.getInventory();
  }
}
