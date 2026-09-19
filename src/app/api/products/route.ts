import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';
import Product from '../../../models/Product';
import { initialProducts } from '../../../data/demoData';

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const products = await Product.find().sort({ createdAt: -1 });
      if (products && products.length > 0) {
        return NextResponse.json(products);
      }
    }
    return NextResponse.json(initialProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(initialProducts);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const conn = await connectToDatabase();
    if (conn) {
      const created = await Product.create(body);
      return NextResponse.json(created, { status: 201 });
    }
    return NextResponse.json({ ...body, _id: `p_${Date.now()}` }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
