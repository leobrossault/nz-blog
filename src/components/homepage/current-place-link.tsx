import { Media, Place } from '../../types'
import { getMedia } from '../../api/media'

type CurrentPlaceLinkProps = {
  place?: Place
}

const CurrentPlaceLink = ({ place }: CurrentPlaceLinkProps) => {
  return (
    <div className="absolute z-10 w-1/4">
      <img src={getMedia(place.attributes.image, 'default')} />
    </div>
  )
}

export default CurrentPlaceLink
