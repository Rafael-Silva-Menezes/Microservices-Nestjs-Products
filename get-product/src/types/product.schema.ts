import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'products-b' })
export class Product extends Document {
  @Prop({ unique: true })
  id: string;

  @Prop()
  description: string;

  @Prop()
  name: string;

  @Prop()
  value: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
