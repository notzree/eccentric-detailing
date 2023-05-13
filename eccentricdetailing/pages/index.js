
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

import Footer from '@/components/Footer'
import Header from '@/components/header'
const products = [
  { name: 'Detailing', href: '/detailing' },
  { name: 'Paint Correction', href: '/paint-correction' },
  { name: 'Paint Correction Film', href: '/paint-correction-film' },
  { name: 'Ceramic Coating', href: '/ceramic-coating' },
  { name: 'Tints', href: '/tints' },
  { name: 'Wraps', href: '/wraps' },
]
const callsToAction = [
  { name: 'Book Now', href: '/https://squareup.com/appointments/book/xzx7iluifnx3n8/L95D8Y2HQSHR0/services', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
    <Header/>
      <div className='w-screen h-screen'></div>

      <Footer />
    </>
  )
}
