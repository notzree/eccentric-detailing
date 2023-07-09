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

export default function Tints() {
    return (
        <>
            <Header />

            <div className="hero min-h-screen" style={{ "background-image": "url(/tintsHeroPhoto.png)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="mb-10 text-white text-6xl font-bold">TINTS</h1>

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
                            Dyed window tints consist of a layer of dyed polyester material that is applied to the glass. They primarily offer increased privacy by reducing the visibility from the outside, while giving a uniform and sleek appearance to the vehicle's windows, and are typically more affordable compared to other tint options. However, over time, dyed tints may be prone to fading and discoloration, and they may not offer the same level of durability and heat rejection as Ceramic Tints.
                            <br></br>
                            <br></br>
                            Ceramic tints is an advanced window film that is applied to vehicle windows for various benefits. Unlike traditional window films, ceramic tint is constructed with layers that offer superior heat rejection, UV protection, and glare reduction, ensuring minimal distortion and maintaining the natural appearance of the windows. Additionally, ceramic tints are highly durable, resisting scratches and fading over time. By effectively blocking infrared heat and harmful UV rays, ceramic tint helps to keep the vehicle's interior cool and protect leather from fading.

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
                            <h3 className="text-2xl font-bold tracking-tight text-white">Window Tints</h3>
                            <p className="mt-4 text-base leading-7 text-white">
                                hehjafasns
                            </p>
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

                                    <p className="text-base font-semibold text-neutral-500">Two Windows</p>
                                    <p className=" flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$79.99</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                                    </p>
                                    <p className="mt-6 text-base font-semibold text-neutral-500">Four Windows</p>
                                    <p className=" flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$149.99</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                                    </p>
                                    <p className=" mt-6 text-base font-semibold text-neutral-500">Front & Back</p>
                                    <p className=" flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$99.99</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                                    </p>
                                    <p className=" mt-6 text-base font-semibold text-neutral-500">Full Car</p>
                                    <p className=" flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$279.99</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                                    </p>
                                    <p className="mt-6 text-xs leading-5 text-gray-600">
                                        Price varies based on vehicle model. Add ons available.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-10 mt-16 border-2 rounded-xl ring-1 ring-white sm:mt-20 lg:flex mb-4 sm:mb-0">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-white">Ceramic Window Tints</h3>
                            <p className="mt-4 text-base leading-7 text-white">
                                hehjafasns
                            </p>
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
                                    <p className="text-base font-semibold text-neutral-500">Two Windows</p>
                                    <p className=" flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$159.99</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                                    </p>
                                    <p className="mt-6 text-base font-semibold text-neutral-500">Four Windows</p>
                                    <p className=" flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$239.99</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                                    </p>
                                    <p className=" mt-6 text-base font-semibold text-neutral-500">Front & Back</p>
                                    <p className=" flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$249.99</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                                    </p>
                                    <p className=" mt-6 text-base font-semibold text-neutral-500">Full Car</p>
                                    <p className=" flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$359.99</span>
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