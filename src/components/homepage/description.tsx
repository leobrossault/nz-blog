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
    <section className="container px-[5%] py-[120px] xl:px-0">
      <div className="grid grid-cols-1 items-end gap-xxl prose lg:grid-cols-[25%_1fr]">
        <div className="relative h-[400px]">
          <Image
            src={getMedia(photo, 'default')}
            alt="Nous"
            layout="fill"
            className=" rounded-xl"
            objectFit="cover"
            blurDataURL={photo.data.attributes.placeholder}
            placeholder="blur"
          />
        </div>

        <Text className="text-white whitespace-pre-line text-justify">
          {description}
        </Text>
      </div>
    </section>
  )
}

export default Description
