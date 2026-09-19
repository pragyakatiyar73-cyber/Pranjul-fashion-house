import mongoose, { Schema, Document } from 'mongoose';

export interface IReserveRequest extends Document {
  name: string;
  phone: string;
  productName: string;
  productId?: string;
  preferredDate: string;
  message?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: Date;
}

const ReserveRequestSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  productName: { type: String, required: true },
  productId: { type: String },
  preferredDate: { type: String, required: true },
  message: { type: String },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.ReserveRequest || mongoose.model<IReserveRequest>('ReserveRequest', ReserveRequestSchema);
