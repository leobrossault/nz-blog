import { Media } from '../../types'
import { getMedia } from '../../api/media'

import { Text } from '../library'

type DescriptionProps = {
  description: string
  photo: Media
}

const Description = ({ description, photo }: DescriptionProps) => {
  return (
    <section className="container py-[120px]">
      <div className="flex items-end gap-xxl prose">
        <img
          src={getMedia(photo, 'default')}
          alt="Nous"
          className="w-1/4 rounded-xl"
        />

        <Text className="text-white">{description}</Text>
      </div>
    </section>
  )
}

export default Description
