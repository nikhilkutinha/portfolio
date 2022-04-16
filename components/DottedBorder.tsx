import Image from './Image'

export const DottedBorder = () => {
  return (
    <div className="relative mx-auto h-0.5 max-w-7xl">
      <Image
        layout="fill"
        className="object-cover"
        alt="Dotted border divider"
        src="/static/images/dotted-border.svg"
      />
    </div>
  )
}
