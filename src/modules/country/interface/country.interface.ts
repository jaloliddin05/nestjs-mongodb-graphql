import { Document, Schema } from 'mongoose';

export interface Country extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  area: string;
}
