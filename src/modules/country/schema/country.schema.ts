import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Country extends Document {
  @Prop({ required: true, unique: true, message: 'Name must be unique' })
  name: string;

  @Prop({ required: true })
  area: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
