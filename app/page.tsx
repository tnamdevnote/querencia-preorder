import CaretIcon from './components/components/Icons/CaretIcon'
import Icon from './components/components/Icons/Icon'

export default function Home() {
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
        <h1 className="animate-bottomIn mb-8 flex text-3xl text-gray-800 md:text-5xl lg:text-5xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="animate-bottomIn child mb-8 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non orci
          ipsum. Integer sed ligula at lacus sagittis sagittis eget eu risus. In
          aliquam convallis.
        </p>
        <button
          type="button"
          className="cta group flex w-full justify-center bg-black px-4 py-4 text-light-gray drop-shadow-2xl md:w-40"
        >
          <span className="relative flex items-center gap-2 transition-all after:absolute after:-right-2 after:text-xl after:text-light-gray after:opacity-0 after:content-['\00bb'] group-hover:pr-4 group-hover:after:opacity-100">
            Pre-order
          </span>
          {/* <Icon
            className="translate-x-[-10px] -rotate-90 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
            name="Caret"
          /> */}
        </button>
      </section>
    </main>
  )
}
