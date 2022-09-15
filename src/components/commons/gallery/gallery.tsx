import { Media } from '../../../types'
import { getMedia } from '../../../api/media'
import Image from 'next/image'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { useState } from 'react'

type GalleryProps = {
  photos: Array<Media>
}

const Gallery = ({ photos }: GalleryProps) => {
  const [photoIndex, setPhotoIndex] = useState<number>(0)
  const [isOpen, setOpenState] = useState<boolean>(false)

  function openLightbox(index: number) {
    setOpenState(true)
    setPhotoIndex(index)
  }

  function closeLightbox() {
    setOpenState(false)
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-xs">
        {photos.map((photo, index) => (
          <div
            className="group relative pt-[100‰] cursor-pointer"
            key={index}
            onClick={() => openLightbox(index)}
          >
            <span className="absolute inset-0 z-10 bg-primary bg-opacity-30 opacity-0 transition-opacity group-hover:opacity-100 group-hover:transition-opacity" />

            <Image
              layout="responsive"
              width={300}
              height={300}
              className="absolute inset-0 z-0 object-cover"
              src={getMedia(photo, 'default')}
              alt={photo.data.attributes.caption}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={getMedia(photos[photoIndex])}
          nextSrc={getMedia(photos[(photoIndex + 1) % photos.length])}
          prevSrc={getMedia(
            photos[(photoIndex + photos.length - 1) % photos.length]
          )}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % photos.length)
          }}
          onCloseRequest={closeLightbox}
        />
      )}
    </div>
  )
}

export default Gallery
