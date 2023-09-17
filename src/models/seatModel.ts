// seatModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ISeat extends Document {
  cinema: mongoose.Types.ObjectId;
  number: number;
  isPurchased: boolean;
}

const seatSchema = new Schema({
  cinema: { type: Schema.Types.ObjectId, ref: 'Cinema' },
  number: { type: Number, required: true },
  isPurchased: { type: Boolean, default: false },
});

export default mongoose.model<ISeat>('Seat', seatSchema);
