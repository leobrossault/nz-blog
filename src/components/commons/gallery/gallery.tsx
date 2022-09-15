import { Media } from '../../../types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { useCallback, useState } from 'react'
import { getMedia } from '../../../api/media'
import Image from 'next/image'

type GalleryProps = {
  photos: Array<Media>
}

const Gallery = ({ photos }: GalleryProps) => {
  const formattedPhotos = photos.map(photo => ({
    src: getMedia(photo),
    caption: photo.data.attributes.caption
  }))

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((index: number) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  // @ts-ignore
  // @ts-ignore
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

      {/*
       // @ts-ignore */}
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={formattedPhotos.map((x: any) => ({
                ...x,
                caption: x.caption
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

export default Gallery
