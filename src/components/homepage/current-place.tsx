import { Place } from '../../types'

type CurrentPlaceProps = {
  place?: Place
}

const CurrentPlace = ({ place }: CurrentPlaceProps) => {
  return <div>{place?.attributes.title}</div>
}

export default CurrentPlace
