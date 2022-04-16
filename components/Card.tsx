import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div
    className={`${
      imgSrc && 'h-full'
    }  overflow-hidden rounded-md bg-white shadow-xl dark:bg-gray-800`}
  >
    {imgSrc &&
      (href ? (
        <Link href={href} aria-label={`Link to ${title}`} className="block">
          <figure className="aspect-w-16 aspect-h-9 relative">
            <Image
              layout="fill"
              alt={title}
              src={imgSrc}
              className="h-full w-full rounded-t-lg object-cover object-center transition group-hover:scale-[1.01] lg:h-full lg:w-full"
            />

            <div className="absolute inset-0 bg-primary-900 opacity-10 transition group-hover:opacity-0"></div>
          </figure>
        </Link>
      ) : (
        <figure className="aspect-w-16 aspect-h-9 relative">
          <Image
            layout="fill"
            alt={title}
            src={imgSrc}
            className="h-full w-full rounded-t-lg object-cover object-center transition group-hover:scale-[1.01] lg:h-full lg:w-full"
          />

          <div className="absolute inset-0 bg-primary-900 opacity-10 transition group-hover:opacity-0"></div>
        </figure>
      ))}

    <div className="p-6">
      <h2 className="mb-3 text-xl md:text-2xl font-bold leading-8 tracking-tight">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
      {href && (
        <Link
          href={href}
          className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Link to ${title}`}
        >
          Learn more &rarr;
        </Link>
      )}
    </div>
  </div>
)

export default Card
