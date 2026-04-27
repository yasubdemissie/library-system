import { Controller } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @MessagePattern('get-catalog')
  getCatalog(): string {
    return this.catalogService.getCatalog();
  }
}
