import { Title } from '../library'
import { ArrowDownCircle } from 'react-feather'
import { Media } from '../../types'
import { getMedia } from '../../api/media'

type HeroProps = {
  logo: Media
}

export default function Hero({ logo }: HeroProps) {
  return (
    <section className="relative flex items-center justify-center h-screen">
      <div className="relative flex flex-col items-center gap-xxl">
        <img
          className="max-w-[150px]"
          src={getMedia(logo, 'default')}
          alt="Léo & Mathilde - Nouvelle Zélande"
        />

        <div className="prose text-center">
          <Title className="text-white">Découvrez notre aventure</Title>

          <Title className="text-white" tag="h2">
            Sur les routes de Nouvelle-Zélande
          </Title>
        </div>
      </div>

      <div className="absolute bottom-xl left-1/2 -translate-x-1/2 text-white">
        <ArrowDownCircle size={30} className="animate-bounce" />
      </div>
    </section>
  )
}
