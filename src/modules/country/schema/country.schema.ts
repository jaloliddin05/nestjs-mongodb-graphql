import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

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

@ObjectType()
export class CountryR {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field()
  name: string;

  @Field()
  area: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
