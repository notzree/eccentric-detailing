import { useState } from 'react'
import Link from 'next/link'
import { Switch } from '@headlessui/react'
import Footer from '@/components/Footer'
import Header from '@/components/header'

const products = [
    {
        id: 1,
        name: 'BMW',
        imageSrc: 'https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'BMW',
        imageSrc: 'https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    }
]

export default function Portfolio() {
    return (
        <>
            <Header />
            <div className="bg-black">
                <div className="flex flex-col items-center justify-center mx-auto max-w-7xl py-10 sm:px-6 sm:py-32 lg:px-8">
                    <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">
                        OUR WORK
                    </h2>

                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <Link
                            href="#"
                            className="rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <a key={product.id} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}