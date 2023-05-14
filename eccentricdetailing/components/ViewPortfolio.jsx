import Link from 'next/link'

export default function ViewPortfolio() {

    return (
        <>
            <div className="bg-black w-screen h-full p-10">
                <div className="flex flex-col items-center justify-center mx-auto max-w-7xl py-10 sm:px-6 sm:py-32 lg:px-8">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
                        SEE THE RESULTS FOR YOURSELF.
                    </h2>

                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <Link
                            href="/portfolio"
                            className="rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            VIEW PORTFOLIO
                        </Link>
                    </div>

                    <div className='py-20 w-screen h-[1/4vh] grid grid-cols-3'>
                        <div className='bg-red-500'>aok</div>
                        <div className='bg-blue-600'>jsjs</div>
                        <div className='bg-white'>shs</div>
                    </div>
                </div>
            </div>
        </>
    )
}