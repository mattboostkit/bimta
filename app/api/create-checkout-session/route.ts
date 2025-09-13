import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  // Initialize Stripe inside the handler to avoid build-time errors
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: 'Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables.' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2025-08-27.basil',
  });
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