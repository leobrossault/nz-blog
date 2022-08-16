import { Place } from '../../types'
import { getMedia } from '../../api/media'

import { Title } from '../library'
import { Link } from '../../components/library'
import { routes } from '../../constants'

type CurrentPlaceLinkProps = {
  place: Place
}

const CurrentPlaceLink = ({ place }: CurrentPlaceLinkProps) => {
  return (
    <div className="container relative">
      <Link
        href={{
          pathname: routes.articles,
          query: {
            place: place.attributes.slug
          }
        }}
      >
        <a className="absolute z-10 top-[200px] right-0 w-1/3 pt-[40%]">
          <img
            className="absolute inset-0 z-0 w-full h-full object-cover rounded-[5px] shadow-xl"
            src={getMedia(place.attributes.image, 'default')}
          />

          <div className="absolute right-0 bottom-0 left-0 z-10 flex justify-end p-xl prose bg-black/[.2]">
            <Title className="text-white uppercase" tag="h3">
              {place.attributes.title}
            </Title>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default CurrentPlaceLink
