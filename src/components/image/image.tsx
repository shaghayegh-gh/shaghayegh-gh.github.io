import {  ImageStyle } from './image-style'

type ImageProps = {
  src: string
  alt: string
}

function Image({ src, alt }: ImageProps) {
  return (
      <ImageStyle alt={alt} src={src} />
  )
}

export default Image
