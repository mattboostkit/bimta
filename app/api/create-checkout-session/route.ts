import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { registration, packageId, package: selectedPackage } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `${selectedPackage.name} - Vehicle Check`,
              description: `Comprehensive vehicle check for ${registration}`,
            },
            unit_amount: Math.round(selectedPackage.price * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/mileage-check/success?session_id={CHECKOUT_SESSION_ID}&reg=${registration}`,
      cancel_url: `${request.headers.get('origin')}/mileage-check`,
      metadata: {
        registration,
        packageId,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe session creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}