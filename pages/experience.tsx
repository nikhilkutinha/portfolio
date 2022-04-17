import LayoutWrapper from '@/components/LayoutWrapper'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const DEFAULT_LAYOUT = 'ExperienceLayout'

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  experienceContent: { mdxSource: string }
}> = async () => {
  const experienceContent = await getFileBySlug('experience', ['default'])
  const { mdxSource } = experienceContent
  return { props: { experienceContent: { mdxSource } } }
}

export default function About({
  experienceContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource } = experienceContent

  return (
    <LayoutWrapper>
      <MDXLayoutRenderer layout={DEFAULT_LAYOUT} mdxSource={mdxSource} />
    </LayoutWrapper>
  )
}
