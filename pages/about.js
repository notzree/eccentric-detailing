import Link from 'next/link'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BookButton from "@/components/BookNowButton";

const people = [
    {
        name: 'Adam Ma',
        role: 'CEO / Co-Founder',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Caleb Lin',
        role: 'Operations Manager',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ilia Mollaghafari',
        role: 'Operations Team',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Anthony Nguyen',
        role: 'Operations Team',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Shevan Selvanayagam',
        role: 'Marketing',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ali Roozbeh',
        role: 'IT Team',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Nyle Ali',
        role: 'IT Team',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

]

export default function About() {
    return (
        <>
            <Header />
            <div className="bg-black">
                <div className="flex flex-col items-center justify-center mx-auto max-w-7xl py-10 sm:px-6 sm:py-32 lg:px-8">
                    <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl mb-10">
                        ECCENTRIC
                    </h2>


                    <BookButton />
                </div>
            </div>
            <div className="bg-white py-20 pb-5 px-10 sm:py-20">
                <div className="mx-auto max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="text-center pb-10">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">MEET OUR TEAM</h2>

                    </div>
                    <ul role="list" className="pb-20 sm:pb-0 grid pl-5 gap-5 gap-x-8 gap-y-15 sm:grid-cols-4 sm:gap-y-20 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-black">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-neutral-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-black pt-20 px-10 sm:py-20">
                <div className="mx-auto max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="pb-10">
                        <h2 className="text-2xl font-bold tracking-tight text-neutral-300 sm:text-2xl">ABOUT OUR TEAM</h2>
                        <p className="mt-2 sm:text-base text-xs leading-8  text-white">
                            Our team at Eccentric Detailing is a dedicated group of talented professionals united by a shared passion for innovation and a commitment to excellence. With backgrounds spanning technology, design, marketing, and beyond, our team possesses a deep understanding of car detailing techniques and a commitment to delivering exceptional results. We take pride in our craftsmanship and treat each vehicle that comes to us with the utmost care and attention. Through continuous training and staying up-to-date with the latest advancements in car care, we ensure that our team remains at the forefront of the industry. Together, we strive to provide our customers with a seamless and enjoyable experience, where their vehicles are transformed into shining works of art.
                        </p>
                    </div>
                    <div className="pb-10">
                        <h2 className="text-2xl font-bold tracking-tight text-neutral-300 sm:text-2xl">WHAT MAKES US DIFFERENT</h2>
                        <p className="mt-2 sm:text-base leading-8 text-white text-xs">
                            In addition to our dedication to excellence, we understand that convenience is paramount for our clients, which is why we offer flexible scheduling options and can even provide mobile detailing services at your desired location.
                            We also believe in making our services affordable, allowing you to enjoy the benefits of professional car detailing on a regular basis with recurring monthly or weekly discounts to provide added value to our customers. Our discounted packages ensure that you can maintain the pristine condition of your vehicle without breaking the bank.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-black w-screen h-full px-20 sm:pb-0 p-20">
                <div className="flex flex-col items-center justify-center mx-auto max-w-7xl sm:px-6 sm:py-20 lg:px-8">
                    <h2 className="text-3xl text-center sm:text-4xl mb-10 font-bold tracking-tight text-white sm:text-4xl">
                        WE GUARANTEE YOU'LL LOVE OUR WORK.
                    </h2>

                    <BookButton />
                </div>
            </div>
            <Footer />
        </>
    )
}
