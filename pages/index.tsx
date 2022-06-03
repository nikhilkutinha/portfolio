import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { SlideUpWhenVisible } from '@/transitions'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { ParallaxBanner } from 'react-scroll-parallax'
import Image from '@/components/Image'
import Navbar from '@/components/Navbar'
import { TerminalCommand, Project } from '@/types'
import { Terminal } from '@/components/terminal'
import { useState } from 'react'
import { getPlaiceholder } from 'plaiceholder'
import { projectsData, terminalData } from '@/data'
import { useTheme } from 'next-themes'
import { DottedBorder } from '@/components/DottedBorder'
import Card from '@/components/Card'
import clsx from 'clsx'
import Footer from '@/components/Footer'
import Link from '@/components/Link'

type TerminalSectionProps = {
  commands: TerminalCommand[]
}

type ProjectsSectionProps = {
  projects?: Project[]
}

export const getStaticProps: GetStaticProps<{
  posts: PostFrontMatter[]
  projects: Project[]
  commands: TerminalCommand[]
}> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  const projects = await Promise.all(
    projectsData.map(async (project) => {
      const { base64, img } = await getPlaiceholder(project.image)

      return {
        ...project,
        imageProps: {
          src: img.src,
          alt: project.name,
          title: project.name,
          blurDataURL: base64,
        },
      }
    })
  ).then((values) => values)

  return { props: { posts, projects, commands: terminalData } }
}

export const HeroSection = () => {
  return (
    <div className="relative z-10 overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-12 dark:bg-gray-900 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white dark:text-gray-900 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <Navbar className="relative z-10 px-4 sm:px-6 lg:px-8" />

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <SlideUpWhenVisible delay={0.3}>
                <p className="mb-4 text-lg font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-300">
                  Heya 👋 I am -
                </p>
              </SlideUpWhenVisible>

              <SlideUpWhenVisible delay={0.5}>
                <h1 className="mb-4 font-semibold">
                  <span className="block bg-gradient-to-r from-success-500 to-info-500 bg-clip-text text-3xl uppercase tracking-tight text-transparent sm:text-[2.75rem]">
                    Nikhil Kutinha
                  </span>

                  <span className="mt-3 block text-3xl tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    aspiring web developer
                  </span>
                </h1>
              </SlideUpWhenVisible>

              <SlideUpWhenVisible delay={0.7}>
                <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  I am a self-taught, full-stack developer, who likes building amazing applications
                  for the interwebs.
                </p>
              </SlideUpWhenVisible>

              <SlideUpWhenVisible delay={0.9}>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      target="_blank"
                      href="/static/resume.pdf"
                      className="group flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white transition hover:bg-primary-700 md:text-lg"
                    >
                      View resume
                      <span className="ml-2 inline-flex transition group-hover:translate-x-1">
                        ⟶
                      </span>
                    </Link>
                  </div>
                </div>
              </SlideUpWhenVisible>
            </div>
          </main>
        </div>
      </div>

      <div className="hidden items-center lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
        <ParallaxBanner
          layers={[
            {
              image: '/static/images/hero-overlay.jpg',
              speed: -25,
              style: { backgroundPositionY: 'bottom' },
            },
          ]}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
        >
          <div className="absolute inset-0 hidden items-center justify-center md:flex">
            <div className="relative z-20 h-52 w-52 overflow-hidden rounded-full border-4 border-white bg-gray-300 dark:bg-gray-800">
              <Image
                className="scale-[1.25]"
                layout="fill"
                alt="Profile photo"
                src="/static/images/profile-photo.png"
              />
            </div>
          </div>
        </ParallaxBanner>
      </div>

      <div className="bg-primary-900 opacity-25 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"></div>
    </div>
  )
}

export const TerminalSection = ({ commands }: TerminalSectionProps) => {
  const [animationComplete, setAnimationComplete] = useState(false)
  const { resolvedTheme } = useTheme()

  return (
    <ParallaxBanner
      layers={[
        {
          image:
            resolvedTheme == 'light'
              ? '/static/images/topography-light.svg'
              : '/static/images/topography-dark.svg',
          speed: -25,
          style: { backgroundSize: 'unset' },
          className: 'text-gray-200',
        },
      ]}
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DottedBorder />
        <div className="relative pt-6 pb-10 lg:pt-10 lg:pb-16">
          <div className="bg-parallax"></div>

          <SlideUpWhenVisible delay={0.1}>
            <h2 className="relative text-2xl font-semibold text-gray-900 dark:text-white">
              About Me
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              TLDR about myself. Click{' '}
              <Link href="/about" className="text-primary-500 transition hover:text-primary-600">
                here
              </Link>{' '}
              if you do not terminal :)
            </p>
          </SlideUpWhenVisible>

          <SlideUpWhenVisible delay={0.3} onComplete={() => setAnimationComplete(true)}>
            <Terminal
              ready={animationComplete}
              commands={commands}
              className="relative z-50 mt-8"
            />
          </SlideUpWhenVisible>
        </div>

        <DottedBorder />
      </div>
    </ParallaxBanner>
  )
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <div className="relative bg-gray-50 pt-6 pb-10 dark:bg-gray-900 lg:pt-10 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-6 gap-4 sm:gap-6 md:grid-cols-12 lg:gap-8">
          <div className="col-span-6 mb-4 md:mb-0">
            <SlideUpWhenVisible>
              <h2 className="relative text-2xl font-semibold text-gray-900 dark:text-white">
                My Projects
              </h2>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Here are some noteworthy projects I have worked on over the years.
              </p>
            </SlideUpWhenVisible>
          </div>

          {projects?.map((p, index) => (
            <div
              key={p.id}
              className={clsx(index % 2 ? 'md:-translate-y-1/2 md:transform' : '', 'col-span-6')}
            >
              <SlideUpWhenVisible>
                <Card
                  key={p.name}
                  title={p.name}
                  description={p.desc}
                  imgSrc={p.image}
                  href={p.links.github}
                />
              </SlideUpWhenVisible>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home({
  projects,
  commands,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <HeroSection />

      <TerminalSection commands={commands} />

      <ProjectsSection projects={projects} />

      <Footer />
    </>
  )
}
