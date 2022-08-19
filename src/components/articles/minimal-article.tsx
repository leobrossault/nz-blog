import { Media } from '../../types'
import { getMedia } from '../../api/media'
import { formatDate } from '../../helpers/dates'

import { ArrowRight } from 'react-feather'
import { Title, Text, Link } from '../library'
import { routes } from '../../constants'

type MinimalArticleProps = {
  slugPlace: string | undefined
  title: string
  image: Media
  introduction: string
  slug: string
  date: string
}

const MinimalArticle = ({
  slugPlace,
  title,
  image,
  introduction,
  slug,
  date
}: MinimalArticleProps) => {
  return (
    <Link
      href={{
        pathname: routes.article,
        query: {
          place: slugPlace,
          slug
        }
      }}
    >
      <a className="flex flex-col gap-m bg-white p-m border rounded-[5px] prose">
        <div className="relative w-full h-[200px]">
          <img
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src={getMedia(image, 'small')}
            alt={title}
          />
        </div>

        <div className="px-l">
          <Text className="text-slate-500 text-sm">
            Publié le {formatDate(date)}
          </Text>

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
