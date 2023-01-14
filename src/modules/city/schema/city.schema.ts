import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Country } from '../../country/schema/country.schema';

@ObjectType()
@Schema()
export class City extends Document {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field()
  @Prop({ required: true, unique: true, message: 'Name must be unique' })
  name: string;

  @Field()
  @Prop({
    required: true,
    ref: Country.name,
    type: MongooseSchema.Types.ObjectId,
  })
  country: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
