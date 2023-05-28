import BookButton from '@/components/BookNowButton'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'

const features = [
  {
    name: 'big pp',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    name: 'big butt',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  },
  {
    name: 'badonkers',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <div className='bg-black w-screen h-screen'>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">

          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              ECCENTRIC DETAILING
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-400">
              pppp
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">

              <BookButton />
              <a href="/about" className="text-sm font-semibold leading-6 text-white">
                LEARN MORE <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-red-400">ABOUT</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">ECCENTRIC</p>
                <p className="mt-6 text-lg leading-8 text-black">
                  pepepepeopopoeopooieopoeoio
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                <div className='m-10'>
                  <Link
                    href="/about"
                    className="rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
            <img
              src="https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>

        </div>
      </div>
      <div className='w-screen'>
        <div className="isolate bg-black py-20">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >

          </div>
          <div className="mx-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">HIGH QUALITY SERVICES</h2>

          </div>
        </div>
        <div className="carousel bg-black">

          <div className="mx-7 carousel-item">
            <div className="ml-5 card w-64 bg-white shadow-xl">
              <figure><img className="h-full" src="https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg" alt="Shoes" /></figure>
              <div className="card-body h-1/2">
                <h2 className="card-title">Detailing</h2>
                <p>xxx?</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-error">VIEW SERVICE</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-7 carousel-item">
            <div className="ml-5 card w-64 bg-white shadow-xl">
              <figure><img className="h-full" src="https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg" alt="Shoes" /></figure>
              <div className="card-body h-1/2">
                <h2 className="card-title">Paint Correction</h2>
                <p>xxx?</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-error">VIEW SERVICE</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-7 carousel-item">
            <div className="ml-5 card w-64 bg-white shadow-xl">
              <figure><img className="h-full" src="https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg" alt="Shoes" /></figure>
              <div className="card-body h-1/2">
                <h2 className="card-title">Ceramic Coating</h2>
                <p>xxx?</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-error">VIEW SERVICE</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-7 carousel-item">
            <div className="ml-5 card w-64 bg-white shadow-xl">
              <figure><img className="h-full" src="https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg" alt="Shoes" /></figure>
              <div className="card-body h-1/2">
                <h2 className="card-title">Tints</h2>
                <p>xxx?</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-error">VIEW SERVICE</button>
                </div>
              </div>
            </div>
          </div>


          <div className="mx-7 carousel-item">
            <div className="ml-5 card w-64 bg-white shadow-xl">
              <figure><img className="h-full" src="https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg" alt="Shoes" /></figure>
              <div className="card-body h-1/2">
                <h2 className="card-title">Wraps</h2>
                <p>xxx?</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-error">VIEW SERVICE</button>
                </div>
              </div>
            </div>
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
