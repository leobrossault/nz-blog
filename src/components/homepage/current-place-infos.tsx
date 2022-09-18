import { Place } from '../../types'
import { formatDate, formatDateTz } from '../../helpers/dates'

type CurrentPlaceInfosProps = {
  place: Place
}

const CurrentPlaceInfos = ({ place }: CurrentPlaceInfosProps) => {
  return (
    <div className="container relative">
      <div className="absolute z-10 top-0 inset-x-0 xl:top-[30px]">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full bg-white py-xl px-xxl rounded-[5px] shadow-xl">
          <p className="font-head text-2xl">{place?.attributes.title}</p>

          <div className="text-center">
            <p className="font-head text-2xl">
              {formatDateTz(Date.now(), 'HH:mm', place.attributes.timezone)}
            </p>

            <p className="font-secondHead text-xl font-extralight">
              Heure locale
            </p>
          </div>

          <div className="text-center">
            <p className="font-head text-2xl">
              {formatDate(place?.attributes.start!, 'DD/MM/YYYY')}
            </p>

            <p className="font-secondHead text-xl font-extralight">
              {`Date d'arrivée`}
            </p>
          </div>

          {place?.attributes.end && (
            <div>
              <p className="font-head text-2xl">
                {formatDate(place?.attributes.end, 'DD/MM/YYYY')}
              </p>
              <p className="font-secondHead text-xl font-extralight">
                Date de départ
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CurrentPlaceInfos
