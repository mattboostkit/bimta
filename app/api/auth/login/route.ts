import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// const mockUsers = [
//   {
//     id: '1',
//     email: 'demo@bimta.co.uk',
//     password: '$2a$10$YourHashedPasswordHere',
//     businessName: 'Demo Dealer',
//     type: 'dealer',
//   },
// ];

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (email === 'demo@bimta.co.uk' && password === 'demo123') {
      const token = jwt.sign(
        {
          userId: '1',
          email: 'demo@bimta.co.uk',
          type: 'dealer'
        },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      return NextResponse.json({
        token,
        user: {
          id: '1',
          email: 'demo@bimta.co.uk',
          businessName: 'Demo Dealer',
          type: 'dealer',
        },
      });
    }

    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    );
  }
}