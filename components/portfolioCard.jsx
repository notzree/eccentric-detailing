import { urlFor } from "@/sanityClient/client";
export default function PortfolioCard({image}) {
  return (
    <a key={image._id} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={urlFor(image.image[0]).url()}
          alt={image.car_model}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.car_model}</h3>
    </a>
  );
}
