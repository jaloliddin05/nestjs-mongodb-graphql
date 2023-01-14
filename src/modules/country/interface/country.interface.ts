import { Document, Types } from 'mongoose';

export interface Country extends Document {
  _id: Types.ObjectId;
  name: string;
  area: string;
}
