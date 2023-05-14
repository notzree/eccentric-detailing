/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import Link from 'next/link'
import { Switch } from '@headlessui/react'
import Footer from '@/components/Footer'
import Header from '@/components/header'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Contact() {
    const [agreed, setAgreed] = useState(false)

    return (
        <>
            <Header />
            <div className="bg-black">
                <div className="flex flex-col items-center justify-center mx-auto max-w-7xl py-10 sm:px-6 sm:py-32 lg:px-8">
                    <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">
                        Get in Touch.
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
            <div className='flex flex-col md:flex-row'>
                <div className="isolate bg-white px-6 py-20 lg:px-8 md:w-1/2">
                    <div
                        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                        aria-hidden="true"
                    >

                    </div>
                    <div className="mx-auto max-w-2xl text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Contact Us</h2>

                    </div>
                    <form action="#" method="POST" className="mx-auto mt-5 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-black">
                                    First Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md bg-white border-2 border-black px-3.5 py-2 text-black focus:shadow-xl placeholder:text-white sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-black">
                                    Last Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md bg-white border-2 border-black px-3.5 py-2 text-black focus:shadow-xl placeholder:text-white sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-black">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white border-2 border-black px-3.5 py-2 text-black focus:shadow-xl placeholder:text-white sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-black">
                                    Phone Number
                                </label>
                                <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                            Country
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            className="h-full rounded-md border-0 bg-transparent bg-none py-0 px-4 text-black focus:ring-0 focus:ring-none sm:text-sm"
                                        >
                                            <option>US</option>
                                            <option>CA</option>

                                        </select>

                                    </div>
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md bg-white border-2 border-black px-3.5 py-2 text-black focus:shadow-xl placeholder:text-white sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-black">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md bg-white border-2 border-black px-3.5 py-2 text-black focus:shadow-xl placeholder:text-white sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <Switch
                                        checked={agreed}
                                        onChange={setAgreed}
                                        className={classNames(
                                            agreed ? 'bg-red-400' : 'bg-gray-200',
                                            'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                agreed ? 'translate-x-3.5' : 'translate-x-0',
                                                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <Switch.Label className="text-sm leading-6 text-black">
                                    By selecting this, you agree to our{' '}
                                    <a href="#" className="font-semibold text-red-400">
                                        privacy&nbsp;policy
                                    </a>
                                    .
                                </Switch.Label>
                            </Switch.Group>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:black"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>
                <div className="isolate bg-white px-6 py-20 lg:px-8 md:w-1/2">
                    <div
                        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                        aria-hidden="true"
                    >

                    </div>
                    <div className="mx-auto max-w-2xl text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">FAQ</h2>

                    </div>
                    <div className="mx-auto mt-5 max-w-xl sm:mt-20 flex flex-col gap-5">
                        <div tabIndex={0} className="collapse collapse-arrow border-black border-2 bg-white rounded-md">
                            <div className="collapse-title text-xl text-black font-medium">
                                How safe will my car be?

                            </div>
                            <div className="collapse-content">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-black border-2 bg-white rounded-md">
                            <div className="collapse-title text-xl text-black font-medium">
                                How safe will my car be?

                            </div>
                            <div className="collapse-content">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-black border-2 bg-white rounded-md">
                            <div className="collapse-title text-xl text-black font-medium">
                                How safe will my car be?

                            </div>
                            <div className="collapse-content">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
