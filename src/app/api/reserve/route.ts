import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';
import ReserveRequest from '../../../models/ReserveRequest';

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const reserves = await ReserveRequest.find().sort({ createdAt: -1 });
      return NextResponse.json(reserves);
    }
    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch reserve requests' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const conn = await connectToDatabase();
    if (conn) {
      const created = await ReserveRequest.create(body);
      return NextResponse.json(created, { status: 201 });
    }
    return NextResponse.json({ ...body, _id: `res_${Date.now()}` }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save reserve request' }, { status: 500 });
  }
}
