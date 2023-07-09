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

export default function CeramicCoating() {
    return (
        <>
            <Header />


            <div className="hero min-h-screen" style={{ "background-image": "url(/ceramicCoatingHeroPhoto.png)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="mb-10 text-white text-6xl font-bold">CERAMIC COATING</h1>

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
                            Ceramic coating is a protective layer applied to a vehicle's exterior surfaces. It is a liquid polymer that chemically bonds with the paintwork, creating a durable and transparent barrier. This coating offers numerous benefits, including long-lasting protection against UV rays, oxidation, chemical stains, and minor scratches. Ceramic coatings also provide hydrophobic properties, causing water to slide off the surface, making it easier to clean and maintain the vehicle's shine. With its exceptional durability and protective properties, ceramic coating is a popular choice for those looking to preserve and enhance their vehicle's paintwork for an extended period.

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
                            <h3 className="text-2xl font-bold tracking-tight text-white">Hybrid Sealant</h3>
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
                                    <p className="text-base font-semibold text-neutral-500">Base Price</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$299.99</span>
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
                            <h3 className="text-2xl font-bold tracking-tight text-white">Sonax CC36 Ceramic Coating</h3>
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
                                    <p className="text-base font-semibold text-neutral-500">Base Price</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$549.99</span>
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