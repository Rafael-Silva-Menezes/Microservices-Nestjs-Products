import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { ProductService } from './app.service';
import { CreateProductDto } from './types/create-product.dto';
import { Product } from './types/product.schema';
import { ClientProxyProducts } from './http/proxy/client.proxy';

@Controller('api/v1')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly clientProxy: ClientProxyProducts,
  ) {}
  private clientAdminBackend = this.clientProxy.getClientProxy();

  @Post('products')
  @UsePipes(ValidationPipe)
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    const response = await this.productService.createProduct(createProductDto);
    this.clientAdminBackend.emit('create-product', createProductDto);

    return response;
  }
}
