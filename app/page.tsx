import Image from 'next/image'
import collection from '@/public/collection.jpg'
import collectionMobile from '@/public/collection-mobile.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-screen-xl flex-col items-center md:flex-row-reverse">
      <section
        className="bg-hero-desktop w-full flex-[1.5] bg-cover bg-center md:min-h-screen"
        aria-label="hero-image"
      ></section>
      <section
        className="hero p-8 md:flex-[1] md:p-16"
        aria-label="Product details"
      >
        <h1 className="flex text-3xl text-gray-800 md:text-5xl lg:text-5xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="mb-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non orci
          ipsum. Integer sed ligula at lacus sagittis sagittis eget eu risus. In
          aliquam convallis.
        </p>
        <button
          type="button"
          className="cta w-full rounded-full bg-black px-4 py-4 text-light-gray md:w-40"
        >
          Pre-order
        </button>
      </section>
    </main>
  )
}
