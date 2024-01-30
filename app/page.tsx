'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// const stripePromise = loadStripe(
//   process.env.TEST_NEXT_STRIPE_PUBLISHABLE_KEY as string
// )

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      )
    }
  }, [])

  const handlePayment = async () => {
    const res = await fetch('api/checkout', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ productID: 'price_1OdlZ2DhmvOt2NtIzpBUdo0r' }),
    })
    if (!res.ok) {
      throw new Error('Failed to checkout')
    }
    const data = await res.json()
    router.push(data.url)
  }

  return (
    <main className="flex min-h-screen w-full max-w-screen-xl flex-col items-center md:flex-row-reverse">
      <section
        className="w-full flex-[1.5] bg-opacity-100 bg-hero-desktop bg-cover bg-center md:min-h-screen"
        aria-label="hero-image"
      ></section>
      <section
        className="hero p-8 md:flex-[1] md:p-16"
        aria-label="Product details"
      >
        <h1 className="mb-8 flex animate-bottomIn text-3xl text-gray-800 md:text-5xl lg:text-5xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="child mb-8 animate-bottomIn text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non orci
          ipsum. Integer sed ligula at lacus sagittis sagittis eget eu risus. In
          aliquam convallis.
        </p>
        <button
          type="button"
          className="cta group flex w-full justify-center bg-black px-4 py-4 text-light-gray drop-shadow-2xl md:w-40"
          onClick={handlePayment}
        >
          <span className="relative flex items-center gap-2 transition-all after:absolute after:-right-2 after:text-xl after:text-light-gray after:opacity-0 after:content-['\00bb'] group-hover:pr-4 group-hover:after:opacity-100">
            Pre-order
          </span>
        </button>
      </section>
    </main>
  )
}
