import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function ExperienceLayout({ children }: Props) {
  return (
    <>
      <PageSEO title='Experience' description='Here is an overview of commercial projects I have worked on' />
      <div className="divide-y dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Experience
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here is an overview of commercial projects I have worked on.
          </p>
        </div>

        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
      </div>
    </>
  )
}
