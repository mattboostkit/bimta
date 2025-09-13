import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { businessName, email, password, phone, dealerNumber } = await request.json();

    if (!businessName || !email || !password || !phone || !dealerNumber) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('New registration:', {
      businessName,
      email,
      phone,
      dealerNumber,
      hashedPassword,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      message: 'Registration successful',
      user: {
        businessName,
        email,
        dealerNumber,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'An error occurred during registration' },
      { status: 500 }
    );
  }
}