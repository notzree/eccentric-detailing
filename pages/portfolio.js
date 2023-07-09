import { useState } from 'react'
import Link from 'next/link'
import { Switch } from '@headlessui/react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {client} from '@/sanityClient/client'
import PortfolioCard from '@/components/portfolioCard'


export async function getStaticProps(){

        const query = '*[_type =="Image"]| order(order asc)';
        const images = await client.fetch(query);
        return{
            props:{
                images: images
            }
        }
}


export default function Portfolio({images}) {
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
                            BOOK NOW
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {images.map((image) => (
                            <PortfolioCard key={image._id} image={image} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}