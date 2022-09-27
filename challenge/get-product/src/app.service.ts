import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './types/product.schema';

@Injectable()
export class ProductService {
  private logger = new Logger(ProductService.name);

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async findProducts(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async insertProduct(product: Product): Promise<void> {
    const { id } = product;
    const foundProduct = await this.productModel.findOne({ id }).exec();
    if (foundProduct) {
      this.logger.log(`Product with ${id} already exists`);
    } else {
      const createdProduct = new this.productModel(product);
      await createdProduct.save();
    }
  }
}
