import { ImageProps } from 'next/image'

export type TerminalCommand = {
  input: string
  output: string
}

export type Project = {
  id: number | string
  name: string
  image: string
  desc: string
  links: {
    github?: string
    app?: string
  }
  imageProps: string | ImageProps
  stack: string[]
}
