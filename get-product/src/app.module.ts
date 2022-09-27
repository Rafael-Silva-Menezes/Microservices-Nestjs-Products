import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './app.controller';
import { ProductService } from './app.service';
import { ProductSchema } from './types/product.schema';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(`${process.env.MONGODB_URL}`),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
