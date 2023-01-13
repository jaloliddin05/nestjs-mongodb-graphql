import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Country extends Document {
  @Field()
  @Prop({ required: true, unique: true, message: 'Name must be unique' })
  name: string;

  @Field()
  @Prop({ required: true })
  area: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
