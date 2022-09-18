import { Media, Place } from '../../types'
import { getMedia } from '../../api/media'
import { formatDate } from '../../helpers/dates'

import { ArrowRight } from 'react-feather'
import { Title, Text, Link } from '../library'
import { routes } from '../../constants'
import Image from 'next/image'

type MinimalArticleProps = {
  place: Place | undefined
  title: string
  image: Media
  introduction: string
  slug: string
  date: string
  showPlace?: boolean
}

const MinimalArticle = ({
  place,
  title,
  image,
  introduction,
  slug,
  date,
  showPlace
}: MinimalArticleProps) => {
  return (
    <Link
      href={{
        pathname: routes.article,
        query: {
          place: place?.attributes.slug,
          slug
        }
      }}
    >
      <a className="flex flex-col gap-m bg-white p-m border rounded-[5px] prose">
        <div className="relative w-full h-[200px]">
          <Image
            layout="fill"
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src={getMedia(image, 'small')}
            alt={title}
            blurDataURL={image.data.attributes.placeholder}
            placeholder="blur"
          />
        </div>

        <div className="px-l">
          <div className="flex items-center gap-xs">
            <Text className="text-slate-500 text-sm">
              Publié le {formatDate(date)}
            </Text>

            {showPlace && place?.attributes.title && (
              <Text className="text-slate-500 text-sm">
                | {place?.attributes.title}
              </Text>
            )}
          </div>

          <Title tag="h3">{title}</Title>

          <Text className="text-slate-500">{introduction}</Text>

          <div className="flex items-center gap-s mt-m text-slate-500 text-sm hover:underline">
            Lire la suite
            <ArrowRight size={16} />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default MinimalArticle
