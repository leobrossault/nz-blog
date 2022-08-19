import { Media } from '../../types'
import { getMedia } from '../../api/media'

import { Text } from '../library'
import Image from 'next/image'

type DescriptionProps = {
  description: string
  photo: Media
}

const Description = ({ description, photo }: DescriptionProps) => {
  return (
    <section className="container py-[120px]">
      <div className="grid grid-cols-[25%_1fr] items-end gap-xxl prose">
        <div className="relative h-[400px]">
          <Image
            src={getMedia(photo, 'default')}
            alt="Nous"
            layout="fill"
            className=" rounded-xl"
            objectFit="cover"
          />
        </div>

        <Text className="text-white">{description}</Text>
      </div>
    </section>
  )
}

export default Description
