import { getMedia } from '../../api/media'

import { Title } from '../library'

type HeroProps = {
  mainPhoto: object
}

export default function Hero({ mainPhoto }: HeroProps) {
  return (
    <section className="flex items-center justify-center h-screen">
      <img
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src={getMedia(mainPhoto, 'default')}
      />

      <div className="relative z-1 prose">
        <Title className="text-white">Blog de Mathilde & Léo</Title>
      </div>
    </section>
  )
}
