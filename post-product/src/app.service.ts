import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './types/create-product.dto';
import { Product } from './types/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async createProduct(product: CreateProductDto): Promise<Product> {
    const { id } = product;
    const findProduct = await this.productModel.findOne({ id }).exec();

    if (findProduct) {
      throw new BadRequestException(`Product with ${id} already exists`);
    }

    const createdProduct = new this.productModel(product);
    return await createdProduct.save();
  }
}
