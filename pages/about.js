import Link from 'next/link'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BookButton from "@/components/BookNowButton";

const people = [
    {
        name: 'Adam Pigu Ma',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Adam Pigu Ma',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Adam Pigu Ma',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Adam Pigu Ma',
        role: 'Co-Founder / CEO',
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
                    <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">
                        ECCENTRIC
                    </h2>
                    <p className="my-6 text-lg leading-8 text-neutral-600">
                        peepeepoopoo
                    </p>
                    <BookButton />
                </div>
            </div>
            <div className="bg-white py-10 sm:py-20">
                <div className="mx-auto max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="text-center pb-10">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">MEET OUR TEAM</h2>
                        <p className="mt-2 text-lg leading-8 text-neutral-600">
                            peepepepeppepeoopoepoo.
                        </p>
                    </div>
                    <ul role="list" className="grid pl-5 gap-5 gap-x-8 gap-y-15 sm:grid-cols-4 sm:gap-y-20 xl:col-span-2">
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
            <div className="bg-black py-10 px-10 sm:py-20">
                <div className="mx-auto max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="pb-10">
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-2xl">ABOUT ECCENTRIC</h2>
                        <p className="mt-2 text-lg leading-8 text-neutral-600">
                            peepepepeppepeoopoepoo.
                        </p>
                    </div>
                    <div className="pb-10">
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-2xl">WHAT MAKES US DIFFERENT</h2>
                        <p className="mt-2 text-lg leading-8 text-neutral-600">
                            peepepepeppepeoopoepoo.
                        </p>
                    </div>
                    <div className="pb-10">
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-2xl">ABOUT OUR TEAM</h2>
                        <p className="mt-2 text-lg leading-8 text-neutral-600">
                            peepepepeppepeoopoepoo.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-black w-screen h-full p-10">
                <div className="flex flex-col items-center justify-center mx-auto max-w-7xl py-10 sm:px-6 sm:py-32 lg:px-8">
                    <h2 className="text-4xl mb-10 font-bold tracking-tight text-white sm:text-4xl">
                        WE GUARANTEE YOU'LL LOVE OUR WORK.
                    </h2>

                    <BookButton />
                </div>
            </div>
            <Footer />
        </>
    )
}
