import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';
import Inquiry from '../../../models/Inquiry';

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const inquiries = await Inquiry.find().sort({ createdAt: -1 });
      return NextResponse.json(inquiries);
    }
    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const conn = await connectToDatabase();
    if (conn) {
      const created = await Inquiry.create(body);
      return NextResponse.json(created, { status: 201 });
    }
    return NextResponse.json({ ...body, _id: `inq_${Date.now()}` }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save inquiry' }, { status: 500 });
  }
}
