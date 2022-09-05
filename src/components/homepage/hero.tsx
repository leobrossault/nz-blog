import { Title, Link } from '../library'
import { ArrowDownCircle } from 'react-feather'
import { Media } from '../../types'
import { getMedia } from '../../api/media'
import Image from 'next/image'

type HeroProps = {
  logo: Media
}

export default function Hero({ logo }: HeroProps) {
  return (
    <section className="relative flex items-center justify-center h-screen">
      <div className="relative flex flex-col items-center gap-xxl">
        <Image
          layout="fixed"
          width={150}
          height={85}
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

      <Link href="#description">
        <a className="absolute bottom-xl left-1/2 -translate-x-1/2 text-white">
          <ArrowDownCircle size={30} className="animate-bounce" />
        </a>
      </Link>
    </section>
  )
}
