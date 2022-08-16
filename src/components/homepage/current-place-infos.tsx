import { Place } from '../../types'
import { formatDate, formatDateFromNz } from '../../helpers/dates'

type CurrentPlaceInfosProps = {
  place?: Place
}

const CurrentPlaceInfos = ({ place }: CurrentPlaceInfosProps) => {
  return (
    <div className="absolute z-10 top-[30px] inset-x-[10%]">
      <div className="flex items-center justify-between w-full bg-white py-xl px-xxl rounded-[5px] shadow-xl">
        <p className="font-head text-2xl">{place?.attributes.title}</p>

        <div className="text-center">
          <p className="font-head text-2xl">
            {formatDateFromNz(Date.now(), 'HH:mm')}
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
  )
}

export default CurrentPlaceInfos
