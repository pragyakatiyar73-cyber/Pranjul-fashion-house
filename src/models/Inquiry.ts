import mongoose, { Schema, Document } from 'mongoose';

export interface IInquiry extends Document {
  name: string;
  phone: string;
  productName: string;
  productId?: string;
  message: string;
  status: 'New' | 'Contacted' | 'Resolved';
  createdAt: Date;
}

const InquirySchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  productName: { type: String, required: true },
  productId: { type: String },
  message: { type: String, required: true },
  status: { type: String, enum: ['New', 'Contacted', 'Resolved'], default: 'New' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);
