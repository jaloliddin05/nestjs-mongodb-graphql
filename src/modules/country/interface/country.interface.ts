import { Document } from 'mongoose';

export interface Country extends Document {
  name: string;
  area: string;
}
