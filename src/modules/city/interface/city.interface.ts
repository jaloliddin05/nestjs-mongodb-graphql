import { Document, Schema } from 'mongoose';

export interface City extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  country: Schema.Types.ObjectId;
}
