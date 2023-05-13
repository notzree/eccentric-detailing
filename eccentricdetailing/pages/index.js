import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid'
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import { SocialIcon } from 'react-social-icons';

const products = [
  { name: 'Detailing', href: '/detailing' },
  { name: 'Paint Correction', href: '/paint-correction' },
  { name: 'Paint Correction Film', href: '/paint-correction-film' },
  { name: 'Ceramic Coating', href: '/ceramic-coating' },
  { name: 'Tints', href: '/tints' },
  { name: 'Wraps', href: '/wraps' },
]
const callsToAction = [
  { name: 'Book Now', href: '/contact', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const defaultProps = {
  center: {
    lat: 43.785935943655645,
    lng: -79.35213241898423,
  },
  zoom: 15,
};

const LocationPin = ({ text }) => (
  <div>
    <Icon icon="mdi:map-marker" className="pin-icon text-3xl text-error" />
  </div>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <header className="bg-black">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <img className="h-20 w-20" src="logo.png" alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                SERVICES
                <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -right-0 z-10 mt-3 w-screen max-w-[190px] overflow-hidden rounded-2xl bg-neutral-600	shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-2 rounded-lg p-2 text-sm leading-6 hover:bg-neutral-500"
                      >
                        <div className="flex-auto">
                          <Link href={item.href} className="block font-semibold text-white">
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" bg-white">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-600" aria-hidden="true" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Link href="/portfolio" className="text-sm font-semibold leading-6 text-white">
              PORTFOLIO
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white">
              ABOUT
            </Link>
          </Popover.Group>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a className="-m-1.5 p-1.5"></a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-neutral-600">
                          SERVICES
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-neutral-600"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Link
                    href="/portfolio"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-600"
                  >
                    PORTFOLIO
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-600"
                  >
                    ABOUT
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className='w-screen h-screen'></div>

      <footer className="footer py-10 pl-20 bg-black text-white">
        <div>
          <img className="w-20 h-20" src='logo.png'></img>
          <div>
            <SocialIcon bgColor="black" fgColor="white" url="https://instagram.com" />
            <SocialIcon bgColor="black" fgColor="white" url="https://tiktok.com" />
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover" href='/detailing'>Detailing</Link>
          <Link className="link link-hover" href='/paint-correction'>Paint Correction</Link>
          <Link className="link link-hover" href='/paint-correction-film'>Paint Correction Film</Link>
          <Link className="link link-hover" href='/ceramic-coating'>Ceramic Coating</Link>
          <Link className="link link-hover" href='/tints'>Tints</Link>
          <Link className="link link-hover" href='/wraps'>Wraps</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover" href='/about' >About Us</Link>
          <Link className="link link-hover" href='/contact'>Contact</Link>
        </div>
        <div>
          <span className="footer-title">Location</span>
          <div className="h-[30vh] w-[50vh] bg-secondary overflow-hidden rounded-lg">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <LocationPin
                lat={43.785935943655645}
                lng={-79.35213241898423}
              />
            </GoogleMapReact>
          </div>
        </div>
      </footer>
    </>
  )
}
