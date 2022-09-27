import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './types/product.schema';
import { ProductController } from './app.controller';
import { ProductService } from './app.service';
import { ProxyModule } from './http/proxy/proxy.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(`${process.env.MONGODB_URL}`),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    ProxyModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
