import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { DottedBorder } from './DottedBorder'

export default function Footer() {
  return (
    <>
      <DottedBorder />
      <footer className="bg-white px-4 dark:bg-gray-800 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-8">
          <div className="flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          </div>

          <div className="mt-6 text-center text-gray-500 dark:text-gray-400">
            <div>
              Made with{' '}
              <Link href="https://nextjs.com" className="font-bold">
                Next.js
              </Link>
              , and{' '}
              <Link href="https://tailwindcss.com" className="font-bold">
                TailwindCSS
              </Link>
              . Hosted on{' '}
              <Link href="https://netlify.com" className="font-bold">
                Netlify.
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div>{`© 2021-${new Date().getFullYear()}`}</div>
              <div>{'•'}</div>
              <div>Nikhil Kutinha</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
