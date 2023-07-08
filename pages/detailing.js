import BookButton from "@/components/BookNowButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ViewPortfolio from "@/components/ViewPortfolio";
import { CheckIcon } from '@heroicons/react/20/solid'

const EliteincludedFeatures = [
  'Exterior Hand wash and dry',
  'Exterior clay bar and premium wax',
  'Interior vacuum and trash removal',
  'Interior carpet shampoo',
  'Interior steam and whip down',
  'Wheel Clean and detailing',
  'Leather Conditioning',
  'Window cleaning',
  'Engine bay'
]
const PrestigeincludedFeatures = [
  'Exterior Hand wash and dry',
  'Interior vacuum and trash removal',
  'Interior carpet shampoo',
  'Wheel Clean and detailing',
  'Window cleaning',
]

export default function Detailing() {
  return (
    <>
      <Header />


      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1583427053896-00378e61e661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80")` }}>
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
      <div className='w-screen flex flex-col md:flex-row'>
        <div className="isolate bg-white px-6 py-20 lg:px-8 md:w-1/2">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >

          </div>
          <div className="mx-auto max-w-2xl text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">WHAT WE DO</h2>
            <div className="mx-auto mt-5 max-w-xl sm:mt-20 sm:text-lg text-xs">
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
        <div className="md:w-1/2 bg-cover" style={{ backgroundImage: `url("https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg")` }}>

        </div>
      </div>
      <div className="bg-black py-20 sm:py-25">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">OUR PACKAGES</h2>
            <p className="mt-6 text-lg leading-8 text-white">
              3 Different packages based off vehicle size and condition.
            </p>
          </div>
          <div className="pt-10 flex justify-center items-center"><BookButton /></div>
          
          <div className="mx-auto mt-16 max-w-2xl border-2 rounded-xl ring-1 ring-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none mb-4 sm:mb-0">
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
          <div className="mx-auto mt-0 max-w-2xl border-2 rounded-xl ring-1 ring-white sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
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
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
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
          <div className="mx-auto mt-16 max-w-2xl border-2 rounded-xl ring-1 ring-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none mb-4 sm:mb-0">
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
        
        </div>
        

      </div>
      <ViewPortfolio />
      <Footer />
    </>
  )
}