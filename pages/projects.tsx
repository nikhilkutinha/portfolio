import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function Projects() {
  return (
    <LayoutWrapper>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here is a complete list of all projects I have worked on.
          </p>
        </div>

        <div className="py-12">
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {projectsData.map((p) => (
              <div key={p.id} className="col-span-2 md:col-span-1">
                <Card
                  key={p.name}
                  title={p.name}
                  description={p.desc}
                  imgSrc={p.image}
                  href={p.links.github}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
