import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export async function POST(request: Request) {
  try {
    const stripe = new Stripe(process.env.TEST_STRIPE_SECRET_KEY ?? '')
    // Create Checkout Sessions from body params

    const session = await stripe.checkout.sessions.create({
      line_items: [
        // these values will later be received from the request.body
        {
          price: 'price_1OdlZ2DhmvOt2NtIzpBUdo0r',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/?success=true`,
      cancel_url: `${request.headers.get('origin')}/?cancel=true`,
      automatic_tax: { enabled: true },
    })

    return Response.json(session)
  } catch (e) {
    Response.error()
  }
}
