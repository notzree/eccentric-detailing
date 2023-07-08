import BookButton from "@/components/BookNowButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ViewPortfolio from "@/components/ViewPortfolio";
import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
]

export default function PaintCorrection() {
    return (
        <>
            <Header />


            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1621688285384-92e5019db2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="mb-10 text-white text-6xl font-bold ">PAINT CORRECTION</h1>
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
                        <div className="mx-auto mt-5 max-w-xl md:mt-5">
                        By carefully removing imperfections like swirl marks, scratches, and oxidation, we use specialized tools and compounds to level the surface and bring out the true depth and clarity of the paint. This process involves multiple stages of polishing with varying levels of abrasiveness to gradually refine the finish. The end result is a beautiful paint surface that showcases a flawless and mirror-like shine, elevating the overall aesthetics of the vehicle.
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-cover" style={{ backgroundImage: `url("https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg")` }}>

                </div>
            </div>
            <div className="bg-black py-20 sm:py-25">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Premium Paint correction</h2>
                    </div>
                    <div className="pt-10 flex justify-center items-center"><BookButton /></div>
                    <div className="mx-auto mt-16 max-w-2xl border-2 rounded-xl ring-1 ring-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-white">Stage 1</h3>

                            <div className="mt-5 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-neutral-500 ">What’s included</h4>
                                <div className="h-px flex-auto bg-white" />
                            </div>
                            <ul
                                role="list"
                                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
                            >
                                {includedFeatures.map((feature) => (
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
                                    <p className="text-base font-semibold text-neutral-500">Base Price</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$180</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                                    </p>

                                    <p className="mt-6 text-xs leading-5 text-gray-600">
                                        Price varies based on vehicle model. Add ons available.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl border-2 rounded-xl ring-1 ring-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-white">Stage 2</h3>

                            <div className="mt-5 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-neutral-500 ">What’s included</h4>
                                <div className="h-px flex-auto bg-white" />
                            </div>
                            <ul
                                role="list"
                                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
                            >
                                {includedFeatures.map((feature) => (
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
                                    <p className="text-base font-semibold text-neutral-500">Base Price</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$180</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                                    </p>

                                    <p className="mt-6 text-xs leading-5 text-gray-600">
                                        Price varies based on vehicle model. Add ons available.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl border-2 rounded-xl ring-1 ring-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-white">Stage 3</h3>

                            <div className="mt-5 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-neutral-500 ">What’s included</h4>
                                <div className="h-px flex-auto bg-white" />
                            </div>
                            <ul
                                role="list"
                                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
                            >
                                {includedFeatures.map((feature) => (
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
                                    <p className="text-base font-semibold text-neutral-500">Base Price</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$180</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                                    </p>

                                    <p className="mt-6 text-xs leading-5 text-gray-600">
                                        Price varies based on vehicle model. Add ons available.
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