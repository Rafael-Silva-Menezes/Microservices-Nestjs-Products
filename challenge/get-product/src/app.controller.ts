import { Controller, Get } from '@nestjs/common';
import { ProductService } from './app.service';
import { Product } from './types/product.schema';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller('api/v1')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  async listProducts(): Promise<Product[]> {
    const response = await this.productService.findProducts();
    return response;
  }

  @EventPattern('create-product')
  async createProduct(
    @Payload() product: Product,
    @Ctx() context: RmqContext,
  ): Promise<void> {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    await this.productService.insertProduct(product);
    await channel.ack(originalMsg);
  }
}
