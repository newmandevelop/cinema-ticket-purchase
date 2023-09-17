// cinemaModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ICinema extends Document {
  seats: number;
}

const cinemaSchema = new Schema({
  seats: { type: Number, required: true },
});

export default mongoose.model<ICinema>('Cinema', cinemaSchema);
