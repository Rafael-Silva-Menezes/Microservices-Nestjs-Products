import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'products-a' })
export class Product extends Document {
  @Prop()
  id: string;

  @Prop()
  description: string;

  @Prop()
  name: string;

  @Prop()
  value: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
