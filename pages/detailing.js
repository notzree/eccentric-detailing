import BookButton from "@/components/BookNowButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ViewPortfolio from "@/components/ViewPortfolio";
import { CheckIcon } from '@heroicons/react/20/solid'

const EliteincludedFeatures = [
  'Exterior hand wash and dry',
  'Exterior clay bar and premium wax',
  'Interior vacuum and trash removal',
  'Interior carpet shampoo',
  'Interior steam and whip down',
  'Wheel clean and detailing',
  'Leather conditioning',
  'Window cleaning',
  'Engine bay'
]
const PrestigeincludedFeatures = [
  'Exterior hand wash and dry',
  'Interior vacuum and trash removal',
  'Interior carpet shampoo',
  'Wheel clean and detailing',
  'Window cleaning',
]

export default function Detailing() {
  return (
    <>
      <Header />


      <div className="hero min-h-screen" style={{ "background-image": "url(/detailingHeroPhoto.png)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="">
            <h1 className="mb-5 text-white text-6xl font-bold">VEHICLE DETAILING</h1>
            <p className="mb-10 text-white w-auto">
              Experience exceptional vehicle detailing with unparalleled attention to detail</p>
            <BookButton />
          </div>
        </div>
      </div>
      <div className='w-screen'>
        <div className="isolate bg-white py-20 lg:px-8">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
          </div>
          <div className="p-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">WHAT WE DO</h2>
            <div className="mt-8 sm:text-base text-xs">
              Interior detailing focuses on deep cleaning and restoring the various components inside the car. This includes vacuuming the seats, carpets, and floor mats to remove dirt and debris. Leather surfaces are carefully cleaned and conditioned to revive their original look and feel. The dashboard, center console, door panels, and other interior surfaces are cleaned and treated with suitable products to remove dust, stains, and marks.
              <br></br>
              <br></br>
              Exterior detailing begins with a wheel cleanse using tire shine and shampoo to give a glossy look. We then apply a comprehensive wash to remove dirt, grime, and contaminants. This is then followed by a foam cannon, hand wash, and gentle towel dry to remove stains from the surface.
              <br></br>
              <br></br>
              Additional steps can be taken depending on the detailing package and specific needs of the vehicle. These may include engine bay cleaning, headlight restoration, and more.

            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-20 sm:py-25">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">OUR PACKAGES</h2>

          </div>
          <div className="pt-10 flex justify-center items-center"><BookButton /></div>

          <div className="mx-10 mt-16 border-2 rounded-xl ring-1 ring-white sm:mt-20 lg:flex mb-4 sm:mb-0">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-white">Prestige Detailing</h3>
              <p className="mt-4 text-base leading-7 text-white">
                Our Prestige Detailing package is for more maintenance condition cars, our entry level package.
              </p>
              <div className="mt-5 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-neutral-500 ">What’s included</h4>
                <div className="h-px flex-auto bg-white" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
              >
                {PrestigeincludedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-neutral-500">Small vehicles</p>
                  <p className=" flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$145</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>
                  <p className="mt-6 text-base font-semibold text-neutral-500">Medium vehicles</p>
                  <p className=" flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$155</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>
                  <p className=" mt-6 text-base font-semibold text-neutral-500">Large vehicles (3 rows)</p>
                  <p className=" flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$180</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>

                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Vehicle sizing up to Eccentric's discretion. Add ons available.
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="mx-10 mt-16 border-2 rounded-xl ring-1 ring-white sm:mt-20 lg:flex mb-4 sm:mb-0">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-white">Elite Detailing</h3>
              <p className="mt-4 text-base leading-7 text-white">
                Our Elite Detailing package is for cars that need a little more love, our most pouplar level package and by far most loved for the price to value from our customers.
              </p>
              <div className="mt-5 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-neutral-500 ">What’s included</h4>
                <div className="h-px flex-auto bg-white" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
              >
                {EliteincludedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-28">
                <div className="mx-auto max-w-xs px-8">
                  <p className=" mt-6 text-base font-semibold text-neutral-500">Small vehicle</p>
                  <p className=" flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$200</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>
                  <p className=" mt-6  text-base font-semibold text-neutral-500">Medium vehicle</p>
                  <p className="flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$220</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>
                  <p className=" mt-6 text-base font-semibold text-neutral-500">Large vehicle (3 rows)</p>
                  <p className=" flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$250</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>

                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Vehicle sizing up to Eccentric's discretion. Add ons available.
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="mx-10 mt-16 border-2 rounded-xl ring-1 ring-white sm:mt-20 lg:flex mb-4 sm:mb-0">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-white">Ultimate Detailing</h3>
              <p className="mt-4 text-base leading-7 text-white">
                Our Ultimate Detailing package is for more maintenance condition cars, our entry level package.
              </p>
              <div className="mt-5 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-neutral-500 ">What’s included</h4>
                <div className="h-px flex-auto bg-white" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
              >
                {PrestigeincludedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-neutral-500">Small vehicles</p>
                  <p className=" flex items-baseline justify-center gap-x-2">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">$145</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>
                  <p className="mt-6 text-base font-semibold text-neutral-500">Medium vehicles</p>
                  <p className=" flex items-baseline justify-center gap-x-2">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">$155</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>
                  <p className=" mt-6 text-base font-semibold text-neutral-500">Large vehicles (3 rows)</p>
                  <p className=" flex items-baseline justify-center gap-x-2">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">$180</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>

                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Vehicle sizing up to Eccentric's discretion. Add ons available.
                  </p>

                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
      <ViewPortfolio />
      <Footer />
    </>
  )
}